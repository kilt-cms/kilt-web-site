##Usage

### Administrative System

When you install Kilt, you can go to /admin to view the Kilt admin system.

![Kilt](img/admin1.png)

Bagpipes comes as a sample time to show you how to use Kilt. It is defined in config/kilt/config.yml:

```yaml
objects:
  bagpipe:
    fields:
      name: text
      weight: number
      description: longtext
      markup: html
      birthday: datetime
      has_stuff: boolean
      pick_one: select_one(Blue|Red|Green)
      image: image
      vimeo_video: vimeo
      youtube_video: youtube
      other: file
```

Creating new types or editing existing ones is as easy as modifying config/kilt/config.yml.

For each type, Kilt provides a list/detail screen for editing creating, editing, and deleting objects.

![Kilt](img/admin2.png)
![Kilt](img/admin3.png)

Retrieving the data entered into the admin system can be retrieved with a few simple commands:

```ruby

bagpipes = Kilt.bagpipes # returns all of the bagpipes as an Array of Hashes

bagpipe = Kilt.get('sample-bagpipe')

```

Here is a sample front-end controller with a page for showing all bagpipes, and
a detail page for each bagpipe.

<script src="https://gist.github.com/darrencauthon/042a8e80c087e0625b7d.js"></script>
