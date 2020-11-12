# Copy from S3 to Cloudinary

This is an example script to demonstrate how to recursively copy media assets from an S3 bucket to Cloudinary.

It uses the AWS CLI, some common Bash tools and this custom NodeJS script.

##Assumptions:

You have AWS CLI installed and a profile configured to the resources you would like to use.

You have your CLOUDINARY_URL (get it from your Cloudinary Dashboard) exported as an environment variable. `export CLOUDINARY_URL=<from Cloudinary dashboard>`

##Usage:

```
aws s3 ls s3://<BUCKET_NAME> --recursive --profile default | awk '{print $4}' | xargs -I % aws s3 presign s3://<BUCKET_NAME>/% --profile default | xargs -n1 node index.js
```

Replace the `<BUCKET_NAME>` with your S3 Bucket name. Replace `--profile default` with your desired/configured profile in `~/.aws`.
