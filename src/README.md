# Project Overview

This is an example of the type of programming that is frequently done at Leepfrog; it is a custom navigation bar for Johnson & Wales University that is unlike any other navigation bar that we've done for other clients.

The navlinks data structure &ndash; contained in navlinks.json &ndash; is an array of denormalized navbar entries; each entry contains an object:

- campus: Which catalog ("university", "providence", "other", etc)
- section: The parent of the current item
- name: The display name
- url: The link target; this is the section of all child links

Goal is to create a function that will be called with a specific campus and a specific path and will return a **string** that contains properly formed XHTML for the navbar: a set of nested unordered lists that can be used in the navbar on the left to show the user "where" they are in the site.

Feel free to spend as much or as little time on this as you wish; but let us know about how much time it took you to do what you did and where it doesn't meet the spec.  Once you have completed the project, please use your name to create a zip archive of your files (e.g. john-smith.zip) and return it via e-mail.

# Sample Output

Sample "university" navigation for /aboutjwu/academicdirectories/

```html
<ul>
  <li><a href="/" title="university navigation">Catalog Home</a></li>
  <li class="active">
    <a href="/aboutjwu/">About JWU</a>
    <ul>
      <li><a href="/aboutjwu/letterfromthepresident/">Letter from President</a></li>
      <li><a href="/aboutjwu/historyofjwu/">History of JWU</a></li>
      <li><a href="/aboutjwu/missionandpurposes/">Mission &amp; Principles</a></li>
      <li><a href="/aboutjwu/campuses/">Campus Facilities</a></li>
      <li><a href="/aboutjwu/accreditations/">Accreditations</a></li>
      <li><a href="/aboutjwu/affiliations/">Affiliations</a></li>
      <li><a href="/aboutjwu/nondiscriminationnotice/">Nondiscrimination Notice</a></li>
      <li><a href="/aboutjwu/corporationandtrustees/">Corporation &amp; Trustees</a></li>
      <li><a href="/aboutjwu/universityleadership/">University Leadership</a></li>
      <li class="active">
        <a href="/aboutjwu/academicdirectories/">Academic Directories</a>
        <ul>
          <li><a href="/aboutjwu/academicdirectories/artsandsciences/">Arts &amp; Sciences</a></li>
          <li><a href="/aboutjwu/academicdirectories/business/">Business</a></li>
          <li><a href="/aboutjwu/academicdirectories/culinaryarts/">Culinary Arts</a></li>
          <li><a href="/aboutjwu/academicdirectories/graduate/">Graduate School</a></li>
          <li><a href="/aboutjwu/academicdirectories/hospitality/">Hospitality</a></li>
          <li><a href="/aboutjwu/academicdirectories/technology/">Technology</a></li>
        </ul>
      </li>
      <li><a href="/aboutjwu/departmentdirectories/">Department Directories</a></li>
    </ul>
  </li>
  <li><a href="/programsofstudy/">Programs of Study</a></li>
  <li><a href="/academicinformation/">Academic Information</a></li>
  <li><a href="/admissions/">Admissions</a></li>
  <li><a href="/financingyourdegree/">Financing Your Degree</a></li>
  <li><a href="/studentservices/">Student Services</a></li>
</ul>
```

Sample "other" navigation for /aboutjwu/academicdirectories/:

```html
<ul>
  <li><a href="/" title="other navigation">Catalog Home</a></li>
  <li class="active">
    <a href="/aboutjwu/">About JWU</a>
    <ul>
      <li><a href="/aboutjwu/letterfromthepresident/">Letter from President</a></li>
      <li><a href="/aboutjwu/historyofjwu/">History of JWU</a></li>
      <li><a href="/aboutjwu/missionandpurposes/">Mission &amp; Principles</a></li>
      <li><a href="/aboutjwu/campuses/">Campus Facilities</a></li>
      <li><a href="/aboutjwu/accreditations/">Accreditations</a></li>
      <li><a href="/aboutjwu/affiliations/">Affiliations</a></li>
      <li><a href="/aboutjwu/nondiscriminationnotice/">Nondiscrimination Notice</a></li>
      <li><a href="/aboutjwu/corporationandtrustees/">Corporation &amp; Trustees</a></li>
      <li><a href="/aboutjwu/universityleadership/">University Leadership</a></li>
      <li class="active">
        <a href="/aboutjwu/academicdirectories/">Academic Directories</a>
        <ul>
          <li><a href="/aboutjwu/academicdirectories/artsandsciences/">Arts &amp; Sciences</a></li>
          <li><a href="/aboutjwu/academicdirectories/business/">Business</a></li>
          <li><a href="/aboutjwu/academicdirectories/culinaryarts/">Culinary Arts</a></li>
          <li><a href="/aboutjwu/academicdirectories/hospitality/">Hospitality</a></li>
        </ul>
      </li>
      <li><a href="/aboutjwu/departmentdirectories/">Department Directories</a></li>
    </ul>
  </li>
  <li><a href="/programsofstudy/">Programs of Study</a></li>
  <li><a href="/academicinformation/">Academic Information</a></li>
  <li><a href="/admissions/">Admissions</a></li>
  <li><a href="/financingyourdegree/">Financing Your Degree</a></li>
  <li><a href="/studentservices/">Student Services</a></li>
</ul>
```