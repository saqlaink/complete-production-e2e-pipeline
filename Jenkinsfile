pipeline{
  agent{
    label "jenkins-agent"
  }
  environment{
    SONAR_TOKEN = credentials('jenkins-sonarqube-token')
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
  }
}