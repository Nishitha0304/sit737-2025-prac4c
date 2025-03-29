Step-by-Step Instructions:
1. Install Node.js from https://nodejs.org
2. Create project folder and run npm init -y
3. Install dependencies: npm install express winston
4. Create index.js file and paste the microservice code
5. Create logs folder for Winston: logs/error.log & logs/combined.log
6. Run the microservice: node index.js
7. Test API endpoints in browser or Postman:
/add?num1=10&num2=5
/subtract?num1=10&num2=5
/multiply?num1=10&num2=5
/divide?num1=10&num2=5
/power?base=2&exponent=3
/sqrt?num=25
/modulo?num1=10&num2=3
8. Check console and logs to verify API requests and errors.
