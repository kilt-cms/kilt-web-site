## Features

###Fast content administration

After you install Kilt, you have a fully-functioning CMS.  Create a schema for each bit of content, and Kilt will create a page to manage it.

###No migrations

Kilt stores all of its data in one table, with each record as JSON. Pure, raw JSON. You ask for data from the CMS, you get JSON back.

If you want to change the shape of your data, just edit your schema in "config/kilt/config.yml". Your admin screens will adjust.

###Your Rails app remains a Rails app

Kilt gives you a CMS, and that's it.  It doesn't turn your Rails app into a "Kilt app" like other CMS libraries.

###Kilt is as easy to remove as it is to setup

Your data is pure JSON, your Kilt objects are defined in one schema file, and Kilt occupies very little of your codebase. 

*This makes Kilt an idea prototyping system as well.*
