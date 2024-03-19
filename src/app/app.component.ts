import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface links {
  link_name : string;
  link : string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /* I have declared three variables for storing the name. */
  first_name : string = "Jessica";
  last_name : string = "Randall";
  full_name : string = `${this.first_name} ${this.last_name}`;

  /* I have declared two variables for storing the place and country. */
  place : string = "London";
  country : string = "United Kingdom";

  /* I have declared a variable for storing the designation role. */
  designation_role : string = "\"Front-end developer and avid reader.\"";

  /* I have provided the image link and description for the avatar image. */
  avatar_image_link : string = "assets/images/avatar-jessica.jpeg";
  avatar_image_description : string = "This is Avatar Image.";

  /* I created an object and named it has "social_media_links" by using interfaces. */
  social_media_links : links[] = [
    {
      link_name: "GitHub",
      link: "https://github.com/"
    },
    {
      link_name: "Frontend Mentor",
      link: "https://www.frontendmentor.io/home"
    },
    {
      link_name: "LinkedIn",
      link: "https://www.linkedin.com/feed/"
    },
    {
      link_name: "Twitter",
      link: "https://twitter.com/"
    },
    {
      link_name: "Instagram",
      link: "https://www.instagram.com/"
    }
  ]

}
