

# Project React-Draggable Deployment Guide

This repository outlines the steps and processes involved in deploying an application using Docker, AWS EC2, and GitHub Actions for CI/CD.

## Dockerization

- **Dockerfile Creation**: A Dockerfile has been created for the application, detailing the instructions for building and running the application within a Docker container. This ensures consistency and portability across different environments.
- **Docker Image**: The Docker image is built locally and then pushed to Docker Hub, making it accessible for deployment on any machine.

## AWS EC2 Deployment

- **EC2 Instance Setup**: An EC2 instance is launched on AWS, configured with the necessary security groups and IAM roles.
- **Docker Deployment**: The Docker image is pulled from Docker Hub onto the EC2 instance and run within a Docker container. This approach simplifies the deployment process and ensures the application runs in a consistent environment.

## CI/CD Pipeline with GitHub Actions

- **Pipeline Setup**: A CI/CD pipeline is set up using GitHub Actions to automate the build and deployment process. The pipeline is triggered on every commit to the main branch, ensuring that the latest changes are continuously integrated and deployed.
- **Pipeline Steps**:
  - **Build the Docker Image**: The pipeline builds the Docker image.
  - **Push to Docker Hub**: The Docker image is pushed to Docker Hub.
  - **SSH into EC2**: The pipeline SSHs into the EC2 instance.
  - **Pull and Run Docker Image**: The latest Docker image is pulled and run, replacing the existing container.

This deployment strategy ensures that the application is consistently and reliably deployed while automating the entire process, reducing manual intervention.

## Getting Started

### Prerequisites

- Docker installed on your local machine.
- AWS account with access to EC2.
- Docker Hub account.
- GitHub repository for the application code.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Build the Docker Image**:
   ```bash
   docker build -t your-dockerhub-username/your-image-name .
   ```

3. **Push the Docker Image to Docker Hub**:
   ```bash
   docker push your-dockerhub-username/your-image-name
   ```

4. **Launch an EC2 Instance**:
   - Log in to your AWS Management Console.
   - Launch a new EC2 instance with the necessary configurations.
   - SSH into your EC2 instance.

5. **Pull and Run the Docker Image on EC2**:
   ```bash
   docker pull your-dockerhub-username/your-image-name
   docker run -d -p 80:80 your-dockerhub-username/your-image-name
   ```

### Setting up GitHub Actions

1. **Create GitHub Actions Workflow**:
   - Navigate to your GitHub repository.
   - Create a new workflow file in `.github/workflows/ci-cd.yml`.

2. **Define the Workflow**:
   ```yaml
   name: CI/CD Pipeline

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout Code
           uses: actions/checkout@v2

         - name: Set up Docker Buildx
           uses: docker/setup-buildx-action@v1

         - name: Log in to Docker Hub
           run: echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin

         - name: Build and Push Docker Image
           run: |
             docker build -t your-dockerhub-username/your-image-name .
             docker push your-dockerhub-username/your-image-name

         - name: SSH into EC2 and Deploy
           uses: appleboy/ssh-action@master
           with:
             host: ${{ secrets.EC2_HOST }}
             username: ${{ secrets.EC2_USER }}
             key: ${{ secrets.EC2_KEY }}
             script: |
               docker pull your-dockerhub-username/your-image-name
               docker run -d -p 80:80 --name your-container-name your-dockerhub-username/your-image-name
   ```

## Conclusion

This README provides a comprehensive guide for deploying an application using Docker, AWS EC2, and GitHub Actions. By following these steps, you can ensure a consistent and automated deployment process, minimizing manual intervention and improving efficiency.



---
