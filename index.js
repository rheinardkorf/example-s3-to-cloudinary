// Script assumes that CLOUDINARY_URL is defined in environment.
// export CLOUDINARY_URL=<get this from Cloudinary dashboard>

var cloudinary = require('cloudinary');

const signed_url = process.argv[2]
const url = signed_url.split( '?' )[0]
const parts = url.replace('https://','').split('/')
parts.shift();
const public_id = parts.join('/').replace(/\.[^/.]+$/, "");

// cloudinary.config({
//     cloud_name: 'dyjvoxfwh',
//     api_key: '734195134127656',
//     api_secret: 'VxpMLwpeVXg1d1MhEYSh31_rfRE'
//   });

  cloudinary.v2.uploader.upload(signed_url,
  {
    // Optional folder prefix.
    // folder: "test_uploads",
    // Uses bucket name and hierarchy. Folder prefix does not replace this.
    public_id
    },
  function(error, result) {console.log(result, error); });
