pipeline {
	agent any
  
	stages {
		stage("Deploy frontend"){

			steps {
				sh "git checkout dev && git pull"
				sh "sudo systemctl restart starfinder-frontend.service"
			} 	
	   }
	}
}
