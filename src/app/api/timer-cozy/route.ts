import { getCldImageUrl } from 'next-cloudinary/helpers';

export async function GET() {
  const dateToday = new Date();
  const dateChristmas = new Date(`12/24/${dateToday.getFullYear()}, 11:59:59 PM`)
  const timeLeft = dateChristmas.getTime() - dateToday.getTime();

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const url = getCldImageUrl({
    src: 'tutorials/my-email-timer/michael-fenton-8hTWsi2OSoA-unsplash_bsql8r',
    width: 800,
    height: 800,
    crop: 'fill',
    format: 'jpg',
    overlays: [
      {
        publicId: 'tutorials/my-email-timer/christopher-campbell-h9Rx3zOYZws-unsplash_cibthm',
        width: '1.5',
        flags: ['relative'],
        position: {
          gravity: 'north',
        },
        appliedEffects: [{
          screen: true
        }]
      },
      {
        text: {
          color: 'white',
          text: `Santa is coming in`.toUpperCase(),
          fontSize: 50,
          fontFamily: 'Oswald'
        },
        position: {
          y: -40
        }
      },
      {
        crop: 'lpad',
        width: 'w_add_50',
        height: 'h_add_50',
        text: {
          color: 'rgb:ffbf00',
          text: `${days} Days  ${hours} Hours`,
          fontSize: 80,
          fontFamily: 'Berkshire Swash',
          fontWeight: 'semibold'
        },
        effects: [{
          blur: 1500
        }],
        position: {
          y: 20
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
          y: 20
        }
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
