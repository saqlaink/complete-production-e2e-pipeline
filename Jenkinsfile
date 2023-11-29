pipeline{
  agent{
    label "jenkins-agent"
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

    // stage("Sonarqube Analysis"){
    //   steps{
    //     withSonarQubeEnv(credentialsId: 'jenkins-sonarqube-token'){
    //       sh "mvn sonar:sonar"
    //     }
    //   }
    // }
    stage("Sonarqube Analysis"){
      steps{
          sh "npm install -g sonarqube-scanner"
          sh "sonar-scanner -Dsonar.projectKey=react-app -Dsonar.sources=src -Dsonar.host.url=https://sonarqube.realcollection.tech -Dsonar.login=sqa_8ef5555eb4fdeb89ce99262d0052a0049cb8a63d"
      }
    }
  }
}