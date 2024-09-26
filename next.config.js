const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mybucket-aws02-asd.s3.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
module.exports = nextConfig;