---
layout: event
wc:
    description:
        short: The Winter Conference is a four day conference held during the last week of the year.
        long: 
            - "High school students from around the Great-Lakes Gulf presbytery, (and often the entire denomination,) gather for four days at the end of the year to participate in the Winter Conference.
            The conference is held at Camp Lakeview, a Christian camp near Columbus, Indiana. 
            The students have opportunity to be challenged in their faith by a series of messages from a guest speaker and to build friendships and community. 
            There are many different activities the students can take part in, including the Stress Challenge and the Theme Dinner."
            - "The Stress Challenge takes participants outdoors in cold weather for an afternoon of teamwork and testing.
            And the Theme Dinner is the opportunity to dress up and kick back for an evening of fun and games."
            - "Plan now to attend the next Winter Conference, and be ready to grow in your Christian faith!"
    packing_list:
        - Sleeping bag and pillow
        - Weather-appropriate clothes
        - Sport/Outdoor clothes
        - Costume for Theme Dinner
        - Toiletries
        - Bible, Psalter, notebook, and a pen
        - Snack, or $2 (if you forget)
        -     "Guys: 2-liter"
        -     "Girls: Snack"
        - Board/Card Games
    location: 
        name: "Camp Lakeview"
        description: 'Seymour, Indiana<br><a href="www.camplakeview.com">www.camplakeview.com</a>'
        address: "Lakeview Camp<br>13500 West Lake Road<br>Seymour, IN 47274"
        drop_off: "Tuesday, December 28 at 5:30pm"
        pick_up: "Friday, December 31 at 10:30am"
        gmap_embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6195.071241678412!2d-86.06634973681656!3d39.07149577177704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b9069aa475047%3A0x37d58accea1f1a93!2sLakeview%20Ministries!5e0!3m2!1sen!2sus!4v1639891460112!5m2!1sen!2sus"
---


<section class="packing_list">
    <h3>Packing List</h3>
    <ul>
        {% for item in page.event.packing_list %}
        <li>{{ item }}</li>
        {% endfor %}
    </ul>
</section>
<section class="location">
    <h3>Location</h3>
    <div class="responsive-frame">
        <iframe 
            width="800" 
            height="300" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
            src="{{ page.event.location.gmap_embed_url }}">
        </iframe>
    </div>
    <div class="container">
        <div class="col">
            <h3>{{ page.event.location.name }}</h3>
            <p>{{ page.event.location.description }}</p>
        </div>
        <div class="col">
            <p>Please arrange to be dropped off at:</p>
            <p style="padding-left: 30px;">{{ page.event.location.address }}</p>
            <p>Drop off / Check-in: <strong>{{ page.event.location.drop_off }}</strong></p>
            <p>Pick up*: <strong>{{ page.event.location.pick_up}}</strong></p>
            <h6>*Registrants are responsible for pick-up arrangements.</h6>
        </div>
    </div>
</section>
