# VirtualEye
   A browser based proctoring application which can be accessed in one of the following supported browsers.
   ![browsers](https://user-images.githubusercontent.com/81794133/170841553-f2b5079b-5747-4868-8776-83e8e771dc16.png)

## UI, Interfaces and Features
1. **Landing Page**

   <img width="1440" alt="1" src="https://user-images.githubusercontent.com/81794133/170841947-f819517e-e7f6-4a76-b0be-faa07cc114e2.png">

2. **Register Page**

   Seamless landing page with Login and Register buttons for user Registration and Login using Firebase Authentication

   <img width="1440" alt="2" src="https://user-images.githubusercontent.com/81794133/170841966-a9a28dca-23c9-45b6-8c56-59e1cf257e63.png">

3. **Login Page**

   Enter the correct credentials to head towards the dashboard.
   <img width="1440" alt="3" src="https://user-images.githubusercontent.com/81794133/170842021-9d708089-2e98-49ea-91c6-5867dfb972a9.png">

4. **Dashboard**

   i)Showing Proctoring Features in sliding images

   ii)Greeting the user using fetched email

   iii)Sidebar with Dark - Light Toggle and links to Statistics and Face Registration Page

   iv)Two Tests which are created already have been displayed
   
   <img width="1440" alt="4" src="https://user-images.githubusercontent.com/81794133/170842042-19a6b9ab-8bf1-479c-b0cf-4b7320fc4e96.png">
   <img width="1440" alt="5" src="https://user-images.githubusercontent.com/81794133/170842086-ce29d3dd-9cb9-4d73-a235-27b4014fb6a3.png">
   
   v)On clicking the 'Take Test' button, a window alert is displayed to ensure whether the user really wants to give the test or has clicked the button by mistake
   
   <img width="1440" alt="12" src="https://user-images.githubusercontent.com/81794133/170862512-c5294a99-4928-4e1e-8bbe-155888d40429.png">


5. **Face Registration Page**

   i)Click on Start Camera and the rest will follow automatically

   ii)After the process, the image is stored in the database in base64 format which can be accessed later

   <img width="1440" alt="6" src="https://user-images.githubusercontent.com/81794133/170842115-da2a61e0-810c-4fc8-a0d8-2a97a2decb26.png">

6. **Test Window (Page)**
   
   i)On clicking 'OK' on alert, the test page with live feed, student details, embedded form, timer and webgazer appears. It may take sometime to be loaded for the first time


   <img width="1440" alt="7" src="https://user-images.githubusercontent.com/81794133/170842180-0e71cd82-5289-46b4-8698-8b9ec39b6127.png">

   ii)Warnings Displayed on violations like looking away for a long time, pressing control key & changing tabs.
   
   <img width="1440" alt="8" src="https://user-images.githubusercontent.com/81794133/170842216-96187840-9a95-4263-a16e-077c1773a2a3.png">
   <img width="1440" alt="9" src="https://user-images.githubusercontent.com/81794133/170842227-2720aaca-010c-4cb0-8d25-66abacea7649.png">
   <img width="1440" alt="10" src="https://user-images.githubusercontent.com/81794133/170842250-d3c1026e-4cb4-4d67-b7ed-23f796c8f52a.png">

   iii)Also, the warning count is monitored and if number of warnings become greater than 4, then the test will terminate automatically and
   the data of the cheat score will be added to the database automatically

   iv)Those who submit the test on time and have warning count less than the threshold have to press the 'Attendance' button to ensure that 
   they are marked present for the test and their data is then recorded.

   v)Also, going Back is disabled on the exam page. Again this feature appears after a certain time.

7. **Statistics Page**

   i) Enter the test name as appeared in the dashboard
   
   ii) Click on 'Set'
   
   iii) Click on 'Get Stats'

   iv) This will display the list of all the users who took the test with their respective warning counts and individual violation counts as well.

   v) To see the list for another exam, type the name of the test as available on dashboard and click set and then get stats.

   vi) This will remove the list of the previous test and display the current entered test violation statistics.

   vii) Using this list the test creator can perform an analysis as to who gave the test fairly and who was warned and terminated, etc.

   <img width="1440" alt="11" src="https://user-images.githubusercontent.com/81794133/170842289-192bc573-2dfc-4e43-b6d4-81d01fe3dc57.png">

8. On clicking the Logout Button on the sidebar, the user will be directed to the landing page.

## Tools and Languages
  * **Front End and Styling** : HTML, CSS, Bootstrap

  * **Backend** : NodeJS ExpressJS
 
  * **Database** : Firebase Realtime Database

  * **Authentication** : Firebase
 
  * **Eye Head Tracking** : webGazer.js

## Points to Remember while testing
   i) Allow permissions for mic and camera

   ii) In case webGazer is not loaded in exam window or not loaded properly, REFRESH the window to solve this. For the first time, it may take some
   time to be loaded

   iii) Test the conditions while attempting the embedded form and some features like head movement initially may take some time to be responded.

## Demo and Links
  Link will be pasted here VDO

  Presentation Link: https://www.canva.com/design/DAFB-oiB9QI/ur2kDoHL061X82neKaTt-w/view?utm_content=DAFB-oiB9QI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink


## Steps for cloning the project

  i)Write git clone https://github.com/PoorviDesai/VirtualEye.git or download as zip.

  ii)Open Folder in VSCode

  iii)Ensure Nodejs is already installed

  iv)Write npm install in your terminal

  v)Write node index.js in terminal

  vi)Open http://localhost:3000 in your browser

## Challenges
  * Maintaining reliability, speed and accuracy.

  * Gathering and customizing face APIs and ML models.

  * Integrating the features within given time frame.

  * Monitoring exams with a proper balance of restrictions.

  * Minimising resource consumption.

  * Learning and implementing databases in limited time

## Future Vision

  * To make this prototype full fledged and useful in real time, some of the features to be worked upon are:

  * Being able to first verify the user before entering the test with the face registered in the database and based on the result deciding whether to   allow or disallow the user inorder to avoid proxy.

  * Integrating Speech or voice detection mechanism in the exam window

  * Making an admin panel with features like creating and customising tests.

  * Feature like the user can see only his/her statistics while the admin can access all.

  * Integrating Microsoft and Google forms and several other quiz and form services with it so that the cheat score along with the marks obtained can be shown in the result section

  * Introduction of more dynamic features in the prototype.
  
  * To make the tracking more efficient and accurate.

### In the end, I would like to thank Microsoft Engage'22 team for giving me the opportunity to work on this project!











