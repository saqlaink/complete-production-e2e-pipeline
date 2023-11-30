# GitOps-Driven Jenkins Pipeline for Complete Production Environment

This repository houses a GitOps-driven Jenkins pipeline designed to automate end-to-end deployments in a complete production environment. The pipeline orchestrates several critical stages, including application building, testing, SonarQube analysis, Docker image creation and push, artifact scanning using Trivy, email notifications, and triggering a Continuous Deployment (CD) pipeline.

## Azure VMs Used

The GitOps-driven Jenkins pipeline operates in an environment with the following Azure VMs:

1. **jenkins-ui**: Hosts the Jenkins user interface for pipeline configuration and management.
2. **jenkins-agent**: Acts as an agent for Jenkins, executing pipeline stages and tasks.
3. **argocd-cluster**: Used for ArgoCD operations and cluster management.
4. **app-cluster**: Hosts the application clusters and manages deployments.
5. **sonarqube**: Used to perform SonarQube analysis for code quality checks.

## Associated GitOps Repository

The associated GitOps repository utilized by this pipeline is available at [GitOps Repository - saqlaink/gitops-complete-production-e2e-pipeline](https://github.com/saqlaink/gitops-complete-production-e2e-pipeline). This repository serves as the central hub for GitOps-based deployment strategies and configurations.

## Pipeline Overview

The Jenkins pipeline performs the following stages:

- **Cleanup Workspace:** Initializes a clean workspace to start the deployment process.
- **Checkout from SCM:** Retrieves the latest codebase from the associated GitOps repository.
- **Build Application:** Executes the necessary steps to build the application.
- **Test Application:** Runs tests to ensure application stability.
- **SonarQube Analysis:** Conducts code analysis using SonarQube for enhanced code quality.
- **Quality Gate:** Enforces quality standards and awaits quality gate status.
- **Build & Push Docker Image:** Builds and pushes the Docker image to the specified registry.
- **Trivy Artifact Scan:** Performs security scanning using Trivy on the Docker image.
- **Send Email with Trivy Scan Report:** Emails the Trivy scan report to a specified recipient.
- **Trigger CD Pipeline:** Triggers the Continuous Deployment (CD) pipeline for the application.

## Usage and Setup

1. **Azure VM Configuration:** Set up the mentioned Azure VMs to operate in the specified roles.
2. **Configure Jenkins Pipeline:** Integrate and configure this pipeline in the Jenkins instance hosted on the `jenkins-ui` VM.
3. **Associate GitOps Repository:** Ensure proper association and access to the GitOps repository.

## Contribution and Enhancements

Contributions and enhancements to this GitOps-driven Jenkins pipeline are welcome. Feel free to propose improvements or additional functionality to streamline deployment processes or enhance automation.

---

Maintained by: [Your Name/Team](link_to_your_profile_or_team)
Your contributions and suggestions are highly appreciated!
