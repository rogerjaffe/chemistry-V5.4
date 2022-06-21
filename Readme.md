### Chemistry Practice system

#### API Gateway / AWS Step Functions

The system back-end endpoint for the student-app is provided by API Gateway called `cp`.  The Gateway calls AWS Step functions and the step functions call primitive Lambda functions

The teacher-app endpoint currently points to the API Gateway called ChemistryQuestionAPI.  There is one only endpoint and several lambda functions.  

The plan is to migrate the teacher-app endpoint API into the `cp` API Gateway and utilize the step function / lambda framework.

#### lambda

AWS lambda functions for the student side ONLY.  The teacher-app API is contained in `chemistry-lambda-api` repository in Github.
Functions are deployed with the `npm run deploy` script located in each lambda function folder 

#### layer

AWS lambda function layer containing the required Node libraries.  Layer is deployed using the `npm run upload-layer` script in the `layer` folder

#### student-app

Student app written in HTML using PUG templating.  The HTML / scripts / css files are automatically deployed with a push to the Chemistry-V5.4 Github repository

#### teacher-app

This is the Teacher APP written in React / Typescript.  The app is automatically deployed with a push to the Chemistry-V5.4 Github repository

Eventual plan is to fold the teacher-app API into the `cp` API Gateway. This uses Step and Lambda functions.  AWS state machines interface with additional AWS lambda functions as necessary.

The teacher-app API also requires the chemistry-lambda-layer repo

### Domains

#### `https://chemistry-practice.com`: Student app
#### `https://teacher.chemistry-practice.com`: Teacher app

As of 2022-04-06 these domains point to the old Amplify apps called chemistry-app-DELETE and chemistry-teacher-DELETE 

Ultimately these domains will be redirected to the new Amplify apps called `Chemistry-V5.4-teacher` and `Chemistry-V5.4-student`

### Todos

1. Migrate ChemistryPracticeAPI to `cp` API and leverage step functions and lambda functions for the most primitive operations
2. Add questions in the library:

   1 6 7 8 9 10 11 13 14 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 43 44 50 51 58 59 60 61 62 63 64 68 69 70 71 72 74 75 76 78 79 84 85 86
   
   Unused in Kiffe's class: 2,3,4,5,12,15,16,42,45,46,47,48,49,52,53,54,55,56,57,65,66,67,73,77,80,81,82,83

4. Clean Github repos - delete all repos except this one!
5. Clean local project folders EXCEPT chemistry-V0 (this is the original from CSUDH)

### Other Reference

Good explanation of how API Gateway mappings work at https://www.alexdebrie.com/posts/api-gateway-elements/#step-3-handling-your-response-with-integration-responses

See `https://github.com/rogerjaffe/githubActionTest/actions/runs/1338719319/workflow`
for an example of using Github actions to automatically deploy a Lambda function when code is pushed.

Inspired from this article `https://blog.jakoblind.no/aws-lambda-github-actions/`

Also see `https://blog.clairvoyantsoft.com/continuous-deployment-of-lambda-functions-f5d930d1937d` for an example of how to use AWS CodePipeline for CI of code.

Step function data flow at `http://learningviacode.blogspot.com/2020/05/playing-with-paths-of-step-functions-1.html`

### Auth system Lambda functions

in /jwt
createTeacherJwt -> Input: email -> Output: JWT
validateJwt -> Input: JWT -> Output: true/false

validateNewUser -> Inputs: email, last, first, school, password, salt -> Output: all inputs and error: false

userExists => Input: email, Output: true/false

validateTeacherLogin -> Inputs: email, password -> Output: true/false

validateStudentLogin -> Inputs: id, teacherEmail, password -> Output: true/false

sendConfirmEmail -> Input: email -> Output: confirmationCode

saveConfirmationCode -> Input: confirmationCode -> Output: true/false

sendPasswordResetEmail -> Input: email -> Output: passwordResetConfirmationCode

changePassword -> Input: email, oldPassword, newPassword -> Output: true/false

confirmEmail -> Input: email -> Output: true/false

### Step functions
login -> validateCredentials -> createTeacherJwt

forgotPassword -> sendPasswordResetEmail

changePassword -> changePassword -> createTeacherJwt

createAccount -> createUser -> sendConfirmEmail

[any request] -> validateJwt -> createTeacherJwt
