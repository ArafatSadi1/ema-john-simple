/*
1. create a new firebase project in console.firebase.google.com
2. nm install firebase
3. create firebase.init.js and import getAuth to export auth.
4. firebase settings > Authentication > enable Email and Password auth.
5. create login, signup component, setUp route
6. attach form field handler and form submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserUserWithEmailAndPassword from react-firebase-hooks
9. if user is created redirect to the expected page
10. useSignInWithEmailAndPassword for sign in
11. create RequiredAuth component ==> check user exists also track user location
12. In route wrap protected component by using RequiredAuth component
*/ 


/*
   Firebase Hosting Steps

1. npm install -g firebase-tools (one time for your computer)
2. firebase login (one time for your computer)
3. firebase init (for each project)
4. npm run build (for every time you want to deploy)
4. firebase deploy (for every time you want to deploy)
*/ 