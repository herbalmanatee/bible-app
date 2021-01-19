import React from 'react';

let initialHTML =
`<div>
  <p>
    <span lang="en-US">Genesis 1</span> (LEB)
  </p>
  <p style="font-weight:bold; font-family:Arial; font-size:10pt; margin-top:12pt;" lang="en-US">
    The Creation
  </p>
  <p style="font-size:12pt; margin:0pt;" lang="en-US">
    <span style="font-weight:bold; font-size:18pt;">1 </span>In the beginning, God created the heavens and the
    earth&mdash; <span style="font-weight:bold; font-family:Arial;"><sup>2&nbsp;</sup></span>Now the earth was formless
    and empty, and darkness <span style="font-style:italic;">was</span> over the face of the deep. And the Spirit of God
    <span style="font-style:italic;">was</span> hovering over the surface of the waters.
    <span style="font-weight:bold; font-family:Arial;"><sup>3&nbsp;</sup></span>And God said, &ldquo;Let there be
    light!&rdquo; And there was light. <span style="font-weight:bold; font-family:Arial;"><sup>4&nbsp;</sup></span>And
    God saw the light, that <span style="font-style:italic;">it was</span> good, and God caused
    <span style="font-style:italic;">there to be</span> a separation between the light and between the darkness.
    <span style="font-weight:bold; font-family:Arial;"><sup>5&nbsp;</sup></span>And God called the light Day, and the
    darkness he called Night. And there was evening and there was morning, <span style="font-style:italic;">the</span>
    first day.
  </p>
  <p style="font-size:12pt; margin:0pt; text-indent:18pt;" lang="en-US">
    <span style="font-weight:bold; font-family:Arial;"><sup>6&nbsp;</sup></span>And God said, &ldquo;Let there be a
    vaulted dome in the midst of the waters, and
    <span style="font-family:Charis SIL; font-size:10pt;"><sub>⌊</sub></span>let it cause a separation between the
    waters<span style="font-family:Charis SIL; font-size:10pt;"><sub>⌋</sub></span>.&rdquo;
    <span style="font-weight:bold; font-family:Arial;"><sup>7&nbsp;</sup></span>So God made the vaulted dome, and he
    caused a separation between the waters which <span style="font-style:italic;">were</span> under the vaulted dome and
    between the waters which were over the vaulted dome. And it was so.
    <span style="font-weight:bold; font-family:Arial;"><sup>8&nbsp;</sup></span>And God called the vaulted dome
    &ldquo;heaven.&rdquo; And there was evening, and there was morning, a second day.
  </p>
  <p style="font-size:12pt; margin:0pt; text-indent:18pt;" lang="en-US">
    <span style="font-weight:bold; font-family:Arial;"><sup>9&nbsp;</sup></span>And God said, &ldquo;Let the waters
    under heaven be gathered to one place, and let the dry ground appear.&rdquo; And it was so.
    <span style="font-weight:bold; font-family:Arial;"><sup>10&nbsp;</sup></span>And God called the dry ground
    &ldquo;earth,&rdquo; and he called the collection of the waters &ldquo;seas.&rdquo; And God saw that
    <span style="font-style:italic;">it was</span> good.
    <span style="font-weight:bold; font-family:Arial;"><sup>11&nbsp;</sup></span>And God said, &ldquo;Let the earth
    produce green plants <span style="font-style:italic;">that will</span> bear seed&mdash;fruit trees bearing fruit
    <span style="font-family:Charis SIL; font-size:10pt;"><sub>⌊</sub></span>in which there is
    seed<span style="font-family:Charis SIL; font-size:10pt;"><sub>⌋</sub></span>&mdash;according to its kind, on the
    earth.&rdquo; And it was so. <span style="font-weight:bold; font-family:Arial;"><sup>12&nbsp;</sup></span>And the
    earth brought forth green plants bearing seed according to its kind, and trees bearing fruit
    <span style="font-family:Charis SIL; font-size:10pt;"><sub>⌊</sub></span>in which there was
    seed<span style="font-family:Charis SIL; font-size:10pt;"><sub>⌋</sub></span> according to its kind. And God saw
    that <span style="font-style:italic;">it was</span> good.
    <span style="font-weight:bold; font-family:Arial;"><sup>13&nbsp;</sup></span>And there was evening and there was
    morning, a third day.
  </p>
  <p style="font-size:12pt; margin:0pt; text-indent:18pt;" lang="en-US">
    <span style="font-weight:bold; font-family:Arial;"><sup>14&nbsp;</sup></span>And God said, &ldquo;Let there be
    lights in the vaulted dome of heaven <span style="font-family:Charis SIL; font-size:10pt;"><sub>⌊</sub></span>to
    separate day from night<span style="font-family:Charis SIL; font-size:10pt;"><sub>⌋</sub></span>, and let them be as
    signs and for appointed times, and for days and years,
    <span style="font-weight:bold; font-family:Arial;"><sup>15&nbsp;</sup></span>and they shall be as lights in the
    vaulted dome of heaven to give light on the earth.&rdquo; And it <span style="font-style:italic;">was</span> so.
    <span style="font-weight:bold; font-family:Arial;"><sup>16&nbsp;</sup></span>And God made two great lights, the
    greater light to rule the day and the smaller light to rule the night, and the stars.
    <span style="font-weight:bold; font-family:Arial;"><sup>17&nbsp;</sup></span>And God placed them in the vaulted dome
    of heaven to give light on the earth
    <span style="font-weight:bold; font-family:Arial;"><sup>18&nbsp;</sup></span>and to rule over the day and over the
    night, and to <span style="font-family:Charis SIL; font-size:10pt;"><sub>⌊</sub></span>separate light from
    darkness<span style="font-family:Charis SIL; font-size:10pt;"><sub>⌋</sub></span>. And God saw that
    <span style="font-style:italic;">it was</span> good.
    <span style="font-weight:bold; font-family:Arial;"><sup>19&nbsp;</sup></span>And there was evening and there was
    morning, a fourth day.
  </p>
  <p style="font-size:12pt; margin:0pt; text-indent:18pt;" lang="en-US">
    <span style="font-weight:bold; font-family:Arial;"><sup>20&nbsp;</sup></span>And God said, &ldquo;Let the waters
    swarm <span style="font-style:italic;">with</span> swarms of living creatures, and let birds fly over the earth
    across the face of the vaulted dome of heaven.&rdquo;
    <span style="font-weight:bold; font-family:Arial;"><sup>21&nbsp;</sup></span>So God created the great sea creatures
    and every living creature <span style="font-style:italic;">that</span> moves,
    <span style="font-style:italic;">with</span> which the waters swarm, according to their kind, and every bird
    <span style="font-style:italic;">with</span> wings according to its kind. And God saw that
    <span style="font-style:italic;">it was</span> good.
    <span style="font-weight:bold; font-family:Arial;"><sup>22&nbsp;</sup></span>And God blessed them, saying, &ldquo;Be
    fruitful and multiply, and fill the waters in the seas, and let the birds multiply on the earth.&rdquo;
    <span style="font-weight:bold; font-family:Arial;"><sup>23&nbsp;</sup></span>And there was evening, and there was
    morning, a fifth day.
  </p>
  <p style="font-size:12pt; margin:0pt; text-indent:18pt;" lang="en-US">
    <span style="font-weight:bold; font-family:Arial;"><sup>24&nbsp;</sup></span>And God said, &ldquo;Let the earth
    bring forth living creatures according to their kind: cattle and moving things, and wild animals according to their
    kind.&rdquo; And it was so. <span style="font-weight:bold; font-family:Arial;"><sup>25&nbsp;</sup></span>So God made
    wild animals according to their kind and the cattle according to their kind, and every creeping thing of the earth
    according to its kind. And God saw that <span style="font-style:italic;">it was</span> good.
  </p>
  <p style="font-size:12pt; margin:0pt; text-indent:18pt;" lang="en-US">
    <span style="font-weight:bold; font-family:Arial;"><sup>26&nbsp;</sup></span>And God said, &ldquo;Let us make
    humankind in our image and according to our likeness, and let them rule over the fish of the sea, and over the birds
    of heaven, and over the cattle, and over all the earth, and over every moving thing that moves upon the
    earth.&rdquo; <span style="font-weight:bold; font-family:Arial;"><sup>27&nbsp;</sup></span>So God created humankind
    in his image, in the likeness of God he created him, male and female he created them.
    <span style="font-weight:bold; font-family:Arial;"><sup>28&nbsp;</sup></span>And God blessed them, and God said to
    them, &ldquo;Be fruitful and multiply, and fill the earth and subdue it, and rule over the fish of the sea and the
    birds of heaven, and over every animal that moves upon the earth.&rdquo;
  </p>
  <p style="font-size:12pt; margin:0pt; text-indent:18pt;" lang="en-US">
    <span style="font-weight:bold; font-family:Arial;"><sup>29&nbsp;</sup></span>And God said, &ldquo;Look&mdash;I am
    giving to you every plant <span style="font-style:italic;">that</span> bears seed which
    <span style="font-style:italic;">is</span> on the face of the whole earth, and every kind of tree
    <span style="font-family:Charis SIL; font-size:10pt;"><sub>⌊</sub></span>that bears
    fruit<span style="font-family:Charis SIL; font-size:10pt;"><sub>⌋</sub></span>. They shall be yours as food.&rdquo;
    <span style="font-weight:bold; font-family:Arial;"><sup>30&nbsp;</sup></span>And to every kind of animal of the
    earth and to every bird of heaven, and to everything that moves upon the earth in which
    <span style="font-style:italic;">there is</span> life <span style="font-style:italic;">I am giving</span> every
    green plant as food.&rdquo; And it was so.
    <span style="font-weight:bold; font-family:Arial;"><sup>31&nbsp;</sup></span>And God saw everything that he had made
    and, behold, <span style="font-style:italic;">it was</span> very good. And there was evening, and there was morning,
    a sixth day.
  </p>
</div>`

export default initialHTML;