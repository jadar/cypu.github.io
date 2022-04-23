---
layout: event-page
title: Fall Ministry
event:
    title: Fall Ministry Project
    date: October 8-10, 2021
    year: 2021  # Remember to increment this number so registration works.
#    topic: 
    speaker:
        image_url: https://picsum.photos/100
    registration:
        cost: 25
        deadline: 2021-10-1
        late_fee: 10
        registration_url: "https://forms.zohopublic.com/firstrpchurch/form/GreatLakesGulfYouthEvents/formperma/tvPFGe07Gxksw0WgKtSdLqKDNR07ksRsP-QvSmJTBos"
# Below are details that do not change every year.
    location: 
        name: "Second Reformed Presbyterian Church"
        description: "Indianapolis, Indiana"
        address: |
            Second Reformed Presbyterian\
            4800 N Michigan Rd\
            Indianapolis, IN 46228
        drop_off: 2021-10-8 17:30:00 -0500
        pick_up: 2021-10-10 14:00:00 -0500
---
<section class="description pewter-blue" markdown="1">
### Fall Ministry is an opportunity for youth to fellowship with others and serve the church in exciting, practical ways.

Every year, high school-aged youth from around the presbytery are invited to the Fall Ministry Project–an event where the youth are able to serve the presbytery’s churches by helping with many different projects. The event begins on a Friday evening with a message from a guest speaker. Later on in the night, the youth are divided into various teams to be sent off to different churches throughout the presbytery. The following day, these teams will travel out to these congregations and aid them in various service projects, in addition to participating in any fun activities that the church may have planned. The youth then have an opportunity to worship with that congregation on Sunday morning before returning back to Second Reformed Presbyterian Church for pickup Sunday afternoon. We hope to see you there!
</section>

<section class="speaker cultured" markdown="1">
### Speaker

{% if page.event.speaker.image_url %}
![{{ page.event.speaker.name }}]({{ page.event.speaker.image_url | relative_url }}){: style="float: left; margin: 10px;" class="speaker-image"}
{% endif %}

### Ken de Jong 
#### Elder at Bloomington Reformed Presbyterian Church

Ken de Jong is a professor of linquistics at Indiana University, and a ruling elder at Bloomington RPC.
</section>

<section class="packing_list dark-orange" markdown="1">
### Packing List

- Sleeping bag and pillow
- Weather-appropriate clothes and shoes for working/serving
- Dress clothes for Sunday
- Toiletries
- Bible, notebook, and a pen
- Snack, or $2 (if you forget)
    - "Guys: 2-liter"
    - "Girls: Snack"
- Enthusiasm to work and a heart to serve
</section>

<section class="location cultured" markdown="1">
### Location
{% include embed-map.html location=page.event.location.address %}

<div class="container" markdown="0">
<div class="row">
<div class="col-6" markdown="1">
The churches the youth will be serving are as follows:

* 2RP (Indianapolis)
* Elkhart
* Immanuel
* Sycamore (Kokomo, IN)
* Westminster (IL)

You will be asked to choose your top five choices when you register.

</div>
<div class="col-6" markdown="1">
Please arrange to be dropped off at:

{{ page.event.location.address | markdownify }}
Registration: *{{ page.event.location.drop_off | date: "%A, %B %d at %I:%M %p" }}*
Pick up\*: *{{ page.event.location.pick_up | date: "%A, %B %d at %I:%M %p" }}*
###### \*Registrants are responsible for pick-up arrangements.
</div>
</div>
</div>
</section>

{% capture registrationDeadlineDate %}{{ page.event.start_date | date: '%F' }}{% endcapture %}
{% capture buildDate %}{{ site.time | date: '%F' }}{% endcapture %}

<section class="registration yellow-green">
{% include registration-section.md %}
</section>

{% include past-events.html %}