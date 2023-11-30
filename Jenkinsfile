pipeline{
  agent{
    label "jenkins-agent"
  }
  environment{
    SONAR_TOKEN = credentials('jenkins-sonarqube-token')
    APP_NAME = "complete-production-e2e-pipeline"
    RELEASE = "1.0.0"
    DOCKER_USER = "saqlainkhan"
    DOCKER_PASS = 'dockerhub'
    IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
    IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
    JENKINS_API_TOKEN = credentials('JENKINS_API_TOKEN')
  }
  tools{
    nodejs "node"
  }
  stages{
    stage("Cleanup Workspace"){
      steps{
        cleanWs()
      }
    }

    stage("Checkout from SCM"){
      steps{
        git branch: 'main', credentialsId: 'github', url: 'https://github.com/saqlaink/complete-production-e2e-pipeline'
      }
    }

    stage("Build Application"){
      steps{
        sh "npm install"
      }
    }

    stage("Test Application"){
      steps{
        sh "CI=true npm test"
      }
    }

    stage("Sonarqube Analysis"){
      steps{
          script {
            withSonarQubeEnv(credentialsId: 'jenkins-sonarqube-token') {
              sh "npm install -g sonarqube-scanner"
              sh "sonar-scanner -Dsonar.projectKey=react-app -Dsonar.sources=src -Dsonar.host.url=https://sonarqube.realcollection.tech -Dsonar.login=${SONAR_TOKEN}"
            }
          }
      }
    }

    stage("Quality Gate"){
      steps{
          script {
            waitForQualityGate abortPipeline: false, credentialsId: 'jenkins-sonarqube-token'
          }
      }
    }

    stage("Build & Push Docker Image"){
      steps{
        script {
          docker.withRegistry('', DOCKER_PASS){
            docker_image = docker.build "${IMAGE_NAME}"
          }

          docker.withRegistry('', DOCKER_PASS){
            docker_image.push("${IMAGE_TAG}")
            docker_image.push("latest")
          }
        }
      }
    }

    stage("Trivy Artifact Scan"){
      steps{
        script {
          sh "trivy image ${IMAGE_NAME}:${IMAGE_TAG} > trivy_scan_report.txt"
        }
      }
    }

    stage('Send Email with Trivy Scan Report'){ 
      steps {
        emailext body: 'Please find the Trivy scan report attached.',
        subject: 'Trivy Scan Report',
        to: 'saqlainkhan25@gmail.com',
        attachmentsPattern: 'trivy_scan_report.txt',
        mimeType: 'text/plain'
      }
    }

    stage("Trigger CD Pipeline"){
      steps{
        script {
          sh "curl -v -k --user admin:${JENKINS_API_TOKEN} -X POST -H 'cache-control: no-cache' -H 'content-type: application/x-www-form-urlencoded' --data 'IMAGE_TAG=${IMAGE_TAG}' 'https://jenkins.realcollection.tech/job/gitops-complete-pipeline/buildWithParameters?token=gitops-token'"
        }
      }
    }
  }

  post {
    always {
      script {
        def status = currentBuild.result ?: 'UNKNOWN'
        def color 
        switch(status) {
          case 'SUCCESS':
            color = 'good'
            break
          case 'FAILURE':
            color = 'danger'
            break
          default:
            color = 'warning'
        }
        slackSend(channel: "#jenkins", message: "GitOps Pipeline trigger ${status.toLowerCase()} for ${env.JOB_NAME} (${env.BUILD_NUMBER})\n More info at: ${env.BUILD_URL}", iconEmoji: ":jenkins:", color: color)
      }
    }
  }
}