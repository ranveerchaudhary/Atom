# Atom  :partly_sunny:
<h3 align = "center"><strong>Atom The Weather App Image.</strong><h3>

<div style = "text-align: center;">
  <p align="justify">Atom is an innovative and comprehensive application
  designed to provide you with accurate weather forecasts and a seamless user experience.
  Atom boasts a responsive and modern user interface, combining the power of HTML,
  CSS, and JavaScript (JQuery) to deliver a visually appealing and intuitive weather
  application. Atom goes beyond the standard weather apps by offering a unique feature to
  calculate the weather for the next day. This feature enables users to plan their activities
  and make informed decisions based on the upcoming weather conditions. By utilizing the
  reliable and up-to-date data from the OpenWeather API, Atom ensures that you have
  access to precise information regarding temperature, humidity, and detailed forecasts.
  The user interface of Atom has been meticulously crafted to provide a user-friendly
  experience. The design emphasizes a clean and intuitive layout, allowing users to
  navigate effortlessly and find the information they need with ease.
  <p>
</div>
  
##

<br>
  
<h1>Contents :rocket:</h1>
<div>
  <ul>
    <li>
    <h3><a href = "#basics">Introduction :page_facing_up:</a></h3>
    <ul>
      <li>
        <h4><a href = "#problem">The Problem :thought_balloon:</a></h4>
      </li>
      <li>
        <h4><a href = "#ui">The Interface :iphone:</a></h4>
      </li>
      <li>
        <h4><a href = "#prediction">Next Day Weather Prediction :receipt:</a></h4>
      </li>
    </ul>
    </li>
    <li>
      <h3><a href = "#engine">The Engine :gear:</a></h3>
      <ul>
      <li>
        <h4><a href = "#code">Code :computer:</a></h4>
      </li>
      <li>
        <h4><a href = "#framework">Frameworks :mechanical_arm:</a></h4>
      </li>
    </ul>
    </li>
    <li>
      <h3><a href = "#contributions">Contributions :anchor:</a></h3>
    </li>
    <li>
      <h3><a href = "#contact">Contact :mailbox_with_mail:<a/></h3>
    </li>
  </ul>
</div>

##

<br>

<h2 id = "basics">Introduction :page_facing_up:</h2>

<h3 id = "problem"> 1. The Problem :thought_balloon: </h3>

<p align="justify">A need for a reliable and accurate weather app has always been present, This is where <strong>Atom</strong> comes. Atoms prioritized performance and reliability, ensuring that the app delivers a seamless experience to users. The efficient use of JavaScript and JQuery enables smooth data retrieval and enhances the overall speed and responsiveness of the application. Users can rely on Atom to provide timely and accurate weather information without any compromise on performance.</p>

<br>

<h3 id = "ui"> 2. The Interface :iphone: </h3>
<div align = "center" style = "display: flex; flex-direction: row; justify-content: center; align-items: center;">
  <img height = "480vh" width = "auto" src = "https://github.com/ranveerchaudhary/Atom/blob/main/gar/cloudy.gif">
  &nbsp
  &nbsp
  <img height = "480vh" width = "auto" src = "https://github.com/ranveerchaudhary/Atom/blob/main/gar/sunny.gif">
  &nbsp
  &nbsp
</div>
<br>
<p align="justify">With its responsive and modern user interface, Atom ensures that you stay informed about the weather conditions in a convenient and intuitive manner. The design emphasizes a clean and modern layout, allowing users to navigate and find the information they need with ease.</p>

<br>

<h3 id = "prediction"> 3. Next Day Weather Prediction :receipt:</h3>

<p align = "justify"> Atom goes beyond the standard weather apps by offering a unique feature to
calculate the weather for the next day. This feature enables users to plan their activities
and make informed decisions based on the upcoming weather conditions. The initial plan was to incorporate time-series analysis however due to API constraints, the current implementation involves SMA.</p>
<!--
<div align = "center" style = "display: flex; flex-direction: row; justify-content: center; align-items: center;">
  <img height = "480vh" width = "auto" src = "https://github.com/ranveerchaudhary/Atom/blob/main/gar/cloudy.gif">
  &nbsp
  &nbsp
  <img height = "480vh" width = "auto" src = "https://github.com/ranveerchaudhary/Atom/blob/main/gar/sunny.gif">
  &nbsp
  &nbsp
</div>
-->

##

<br>

<h2 id = "engine">The Engine :gear: </h2>

<h3 id = "code">1. Code :computer:</h3>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<p align = "justify">The main forces behind Atom are vanilla HTML, CSS & JavaScript with :sunny: custom animated weather widgets (courtesy to <a href = "https://bas.dev/">Bas</a>). HTML is a versatile language that can be used to create a wide range of different web pages, from simple static pages to complex interactive web applications. It is designed to be easy to learn and use, and there are many resources available online to help beginners get started with HTML.  CSS, or Cascading Style Sheets, is a style sheet language used to describe the presentation of HTML (or XML) documents. In other words, while HTML is used to define the structure and content of a web page, CSS is used to define how that content should be displayed. JavaScript is a high-level programming language that is primarily used to create interactive and dynamic web pages. It is often referred to as a client-side language because it is executed on the client's web browser rather than on the web server.</p>

<br>

<h3 id = "framework">2. Frameworks :mechanical_arm:</h3> 

![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<p align = "justify">In addition to the popular trio, Atom also incorporates JQuery as a lightweight and versatile JavaScript library designed to simplify web development tasks. With its intuitive syntax and extensive collection of ready-to-use functions, jQuery empowers developers to create interactive and dynamic web pages effortlessly. Whether it's handling event-driven actions, manipulating HTML elements, or making asynchronous requests, JQuery streamlines the process and enhances the overall efficiency of web development projects. Its widespread adoption and extensive documentation make it a popular choice among developers for building modern and engaging websites.</p>

##

<br>

<h2 id = "contributions">Contributions :anchor:</h2>

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##

<br>

<h2 id = "contact">Contact :mailbox_with_mail:</h2>

Email: ranveerchaudhary1000@gmail.com
