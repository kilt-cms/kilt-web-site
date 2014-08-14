##Usage
###Authentication

Of course, you need to protect access to your Kilt CMS section.  Kilt comes with Basic HTTP Authentication out-of-the-box, which can be controlled in the "auth" section of kilt/config/creds.yml:

```yaml
auth:
  username: YOUR_USERNAME
  password: YOUR_PASSWORD
```

###S3 Storage

By default, Kilt will store all file uploads to public/uploads. This obviously won't work for deployed sites, so Kilt comes with Amazon S3 support out-of-the-box.
If you would like to switch to S3, change the "storage" section of your config/kilt/config.yml to:

```yaml
storage:
  strategy: s3
```

Provide your S3 credentials in the "s3" section of kilt/config/creds.yml:

```yaml
s3:
  key: YOUR_S3_KEY
  secret: YOUR_S3_SECRET
  bucket: YOUR_S3_BUCKET
```
