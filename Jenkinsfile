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
        sh "npm run test"
      }
    }
  }
}