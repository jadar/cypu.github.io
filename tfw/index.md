---
layout: event-page
title: TFW
subtitle: Theological Foundations Weekend
event:
    title: Theological Foundations Weekend
    start_date: 2022-2-1
    end_date: 2021-12-31
    date: December 26 - December 31, 2021
    year: 2022  # Remember to increment this number so registration works.
    topic: RP Distinctives
    registration:
        cost: 85
        deadline: 2022-2-1
        late_fee: 10
        registration_url: "https://forms.zohopublic.com/firstrpchurch/form/GreatLakesGulfYouthEvents/formperma/tvPFGe07Gxksw0WgKtSdLqKDNR07ksRsP-QvSmJTBos"
    speaker:
        name: Pastor David Hanson
        byline: Reformed Presbyterian Church of Southside Indianapolis
        bio: >
            David Hanson is a hunk.
        image_url: /assets/images/speakers/joel-hart.jpg

# Below are details that do not change every year.

    location: 
        name: Southside Reformed Presbyterian Church
        description: |
            Indianapolis, IN
        address: |
            Southside RPC\
            6969 S Meridian Street\
            Indianapolis, IN 46217
        drop_off: 2021-12-28 17:30:00 -0500
        pick_up: 2021-12-31 10:30:00 -0500
---
<section class="description pewter-blue" markdown="1">
### TFW is a weekend of intensive theological study and fellowship for high school students.

The retreat aims to solidify the student’s understanding of and commitment to the doctrines and distinctive principles of the RPCNA. Because TFW is designed for upperclassmen, we also hope to strengthen their theological foundation in readiness for college and the workplace. We also want to encourage students toward enthusiasm for the ministries of the RPCNA as the sphere of their future service to Christ and His kingdom. Through this event, students will be able to participate in vibrant fellowship with fellow Christian youth around the study of God’s Word.
</section>

<section class="topics jonquil" markdown="1">
### Topics

- God’s Glory in Salvation
- Life Goals and Objectives
- Personal Spirituality
</section>

<section class="speaker cultured" markdown="1">
### Speaker

{% if page.event.speaker.image_url %}
![{{ page.event.speaker.name }}]({{ page.event.speaker.image_url | relative_url }}){: style="float: left; margin: 10px;" class="speaker-image"}
{% endif %}

### {{ page.event.speaker.name }}
#### {{ page.event.speaker.byline }}
{{ page.event.speaker.bio }}

</section>

<section class="packing_list dark-orange" markdown="1">
### Packing List

- Sleeping bag and pillow
- Sunday dress clothes
- Toiletries
- Bible, Psalter, notebook, and a pen
- Snack, or $2 (if you forget)
    - 2-liter
    - Snack
- Board/Card Games
- Cash for book table

###### Please, no electronic devices except cellphones!
</section>

<section class="location cultured" markdown="1">
### Location
{% include embed-map.html location=page.event.location.address %}

<div class="container" markdown="0">
<div class="row">
<div class="col-6" markdown="1">
### {{ page.event.location.name }}
{{ page.event.location.description | markdownify }}
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