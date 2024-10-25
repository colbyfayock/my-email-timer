import { getCldImageUrl } from 'next-cloudinary/helpers';

export async function GET() {
  const dateToday = new Date();
  const dateChristmas = new Date(`12/24/${dateToday.getFullYear()}, 11:59:59 PM`)
  const timeLeft = dateChristmas.getTime() - dateToday.getTime();

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const url = getCldImageUrl({
    src: 'tutorials/my-email-timer/amy-shamblen-x2lm26Rs2PM-unsplash_i47hav',
    width: 800,
    height: 500,
    crop: 'fill',
    format: 'jpg',
    effects: [{
      colorize: '100,co_rgb:dc332f',
    }],
    overlays: [
      {
        text: {
          color: 'white',
          text: `Santa is coming in`.toUpperCase(),
          fontSize: 50,
          fontFamily: 'Oswald'
        },
        position: {
          gravity: 'north',
          y: 50
        }
      },
      {
        crop: 'lpad',
        width: 'w_add_50',
        height: 'h_add_50',
        text: {
          color: 'white',
          text: `${days} Days  ${hours} Hours`,
          fontSize: 80,
          fontFamily: 'Berkshire Swash',
          fontWeight: 'semibold'
        },
        position: {
          gravity: 'north',
          y: 70
        }
      },
      {
        publicId: 'tutorials/my-email-timer/krakenimages-liT5AlTmC8I-unsplash-transparent_tfcpki',
        width: '1.0',
        position: {
          y: 200,
        },
        flags: ['relative'],
      }
    ]
  });

  const image = await fetch(url);

  return new Response(image.body, {
    status: 200,
    headers: {
      'Content-Type': String(image.headers.get('Content-Type')),
      'Content-Length': String(image.headers.get('Content-Length')),
      // Uncomment to disable cache on the endpoint
      // 'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
    }
  })
}
