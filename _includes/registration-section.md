{% capture registration_markdown %}
### Registration

The cost of the event is **${{ page.event.registration.cost }}**.
If paid after {{ page.event.registration.deadline | date_to_long_string: "ordinal", "US" }}, there is a ${{page.event.registration.late_fee }} late fee.
While we prefer online payment, you may also pay at the door.


If you are writing a check, please make checks payable to: “CYPU”

<div class='center'><a class="button" href="{{ page.event.registration.registration_url }}">Register now!</a></div>
{% endcapture %}
{{ registration_markdown | markdownify }}