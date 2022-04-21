---
layout: page
title: Winter Conference
subtitle: Living Well in God's World<br>December 26 - December 31, 2021
event:
    title: Winter Conference
    start_date: 2022-2-1
    end_date: 2021-12-31
    date: December 26 - December 31, 2021
    year: 2021  # Remember to increment this number so registration works.
    topic: Living Well in God’s World
    registration:
        cost: 85
        deadline: 2022-2-1
        late_fee: 10
        registration_url: "https://forms.zohopublic.com/firstrpchurch/form/GreatLakesGulfYouthEvents/formperma/tvPFGe07Gxksw0WgKtSdLqKDNR07ksRsP-QvSmJTBos"
    speaker:
        name: Rev. Joel Hart
        byline: Pastor of Columbus Reformed Presbyterian Church
        bio: >
            Joel Hart has enjoyed serving as pastor of Columbus RP Church since April 2021. 
            He previously pastored at Second RP (Indianapolis), where he served since graduating from RPTS in 2018. 
            Joel is married to Orlena and they have 5 kids (David, Jenny, Elisha, Esther, Seth). 
            Joel enjoys running, basketball, and trying with limited success to beat his wife at board games.
        image_url: /assets/images/speakers/joel-hart.jpg

# Below are details that do not change every year.

    description: >
        ### The Winter Conference is a four day conference held during the last week of the year.

        High school students from around the Great-Lakes Gulf presbytery, (and often the entire denomination,) gather for four days at the end of the year to participate in the Winter Conference.
        The conference is held at Camp Lakeview, a Christian camp near Columbus, Indiana. 
        The students have opportunity to be challenged in their faith by a series of messages from a guest speaker and to build friendships and community. 
        There are many different activities the students can take part in, including the Stress Challenge and the Theme Dinner.
       
 
        The Stress Challenge takes participants outdoors in cold weather for an afternoon of teamwork and testing.
        And the Theme Dinner is the opportunity to dress up and kick back for an evening of fun and games.

        
        Plan now to attend the next Winter Conference, and be ready to grow in your Christian faith!
    location: 
        name: Camp Lakeview
        description: |
            Seymour, Indiana\
            [www.camplakeview.com](www.camplakeview.com)
        address: |
            Lakeview Camp\
            13500 West Lake Road\
            Seymour, IN 47274
        drop_off: 2021-12-28 17:30:00 -0500
        pick_up: 2021-12-31 10:30:00 -0500
        gmap_embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6195.071241678412!2d-86.06634973681656!3d39.07149577177704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b9069aa475047%3A0x37d58accea1f1a93!2sLakeview%20Ministries!5e0!3m2!1sen!2sus!4v1639891460112!5m2!1sen!2sus"
    packing_list: |
        - Sleeping bag and pillow
        - Weather-appropriate clothes
        - Sport/Outdoor clothes
        - Costume for Theme Dinner
        - Toiletries
        - Bible, Psalter, notebook, and a pen
        - Snack, or $2 (if you forget)
            - Guys: 2-liter
            - Girls: Snack
        - Board/Card Games
---
{: .event}
<section class="description">
    {{ page.event.description | markdownify }}
</section>
<section class="speaker" markdown="1">
### Speaker

{% if page.event.speaker.image_url %}
![{{ page.event.speaker.name }}]({{ page.event.speaker.image_url | relative_url }}){: style="float: left; margin: 10px;" class="speaker-image"}
{% endif %}

### {{ page.event.speaker.name }}
#### {{ page.event.speaker.byline }}
{{ page.event.speaker.bio }}

</section>

<section class="packing_list" markdown="1">
### Packing List
{{ page.event.packing_list | markdownify }}
</section>

<section class="location" markdown="1">
### Location
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
<div class="container" markdown="1">
<div class="row" markdown="1">
<div class="col" markdown="1">
{: .text-center }
### {{ page.event.location.name }}
{{ page.event.location.description | markdownify }}

</div>
<div class="col" markdown="1">
Please arrange to be dropped off at:


{{ page.event.location.address | markdownify }}{: style="padding-left: 30px;"}
Registration: **{{ page.event.location.drop_off | date: "%A, %B %d at %I:%M %p" }}**  
Pick up\*: **{{ page.event.location.pick_up | date: "%A, %B %d at %I:%M %p" }}**

###### \*Registrants are responsible for pick-up arrangements.
</div>
</div>
</div>
</section>

{% capture registrationDeadlineDate %}{{ page.event.start_date | date: '%F' }}{% endcapture %}
{% capture buildDate %}{{ site.time | date: '%F' }}{% endcapture %}

{% if buildDate < registrationDeadlineDate %} 
<section class="registration" markdown="1">
### Registration

The cost of the event is **${{ page.event.registration.cost }}**.
If paid after {{ page.event.registration.deadline | date_to_long_string: "ordinal", "US" }}, there is a ${{page.event.registration.late_fee }} late fee.
While we prefer online payment, you may also pay at the door.


If you are writing a check, please make checks payable to: “CYPU”

<center>
<a class="btn btn-primary btn-lg" href="{{ page.event.registration.registration_url }}">Register now!</a>
</center>
</section>
{% endif %}
