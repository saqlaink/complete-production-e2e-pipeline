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
  }
}