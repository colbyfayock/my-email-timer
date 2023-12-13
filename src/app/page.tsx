import CldImage from '@/components/CldImage';

export default function Home() {
  const dateToday = new Date();
  const dateChristmas = new Date(`12/24/${dateToday.getFullYear()}, 11:59:59 PM`)
  const timeLeft = dateChristmas.getTime() - dateToday.getTime();

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  return (
    <main className="grid grid-cols-2 items-center max-w-2xl mx-auto">
      <CldImage
        src="my-email-timer/amy-shamblen-x2lm26Rs2PM-unsplash_i47hav"
        width={1200}
        height={800}
        crop="fill"
        format="jpg"
        overlays={[
          {
            text: {
              color: 'rgb:BFFBFF',
              text: 'Santa is coming in'.toUpperCase(),
              fontFamily: 'Oswald',
              fontSize: 70
            },
            position: {
              y: -60
            }
          },
          {
            text: {
              color: 'white',
              text: `${days} Days  ${hours} Hours`,
              fontFamily: 'Berkshire Swash',
              fontSize: 120
            },
            position: {
              y: 40
            }
          },
        ]}
        alt="Holiday Card"
      />
      <CldImage
        src="my-email-timer/amy-shamblen-x2lm26Rs2PM-unsplash_i47hav"
        width={1200}
        height={800}
        crop="fill"
        format="jpg"
        effects={[{
          colorize: '100,co_rgb:dc332f',
        }]}
        overlays={[
          {
            text: {
              color: 'white',
              text: `Santa is coming in`.toUpperCase(),
              fontSize: 70,
              fontFamily: 'Oswald'
            },
            position: {
              gravity: 'north',
              y: 40
            }
          },
          {
            crop: 'lpad',
            width: 'w_add_50',
            height: 'h_add_50',
            text: {
              color: 'white',
              text: `${days} Days  ${hours} Hours`,
              fontSize: 120,
              fontFamily: 'Berkshire Swash',
              fontWeight: 'semibold'
            },
            position: {
              gravity: 'north',
              y: 80
            }
          },
          {
            publicId: 'my-email-timer/krakenimages-liT5AlTmC8I-unsplash-transparent_tfcpki',
            width: '1.0',
            position: {
              y: 200,
            },
            flags: ['relative'],
          }
        ]}
        alt="Holiday Card"
      />
      <CldImage
        src="my-email-timer/michael-fenton-8hTWsi2OSoA-unsplash_bsql8r"
        width={1200}
        height={800}
        crop="fill"
        format="jpg"
        overlays={[
          {
            publicId: 'my-email-timer/christopher-campbell-h9Rx3zOYZws-unsplash_cibthm',
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
              fontSize: 70,
              fontFamily: 'Oswald'
            },
            position: {
              y: -60
            }
          },
          {
            crop: 'lpad',
            width: 'w_add_50',
            height: 'h_add_50',
            text: {
              color: 'rgb:ffbf00',
              text: `${days} Days  ${hours} Hours`,
              fontSize: 120,
              fontFamily: 'Berkshire Swash',
              fontWeight: 'semibold'
            },
            effects: [{
              blur: 1500
            }],
            position: {
              y: 40
            }
          },
          {
            crop: 'lpad',
            width: 'w_add_50',
            height: 'h_add_50',
            text: {
              color: 'white',
              text: `${days} Days  ${hours} Hours`,
              fontSize: 120,
              fontFamily: 'Berkshire Swash',
              fontWeight: 'semibold'
            },
            position: {
              y: 40
            }
          }
        ]}
        alt="Holiday Card"
      />
      <CldImage
        src="my-email-timer/annie-spratt-8ydrw1__vrs-unsplash_gs2kw5"
        width={1200}
        height={800}
        crop="fill"
        format="jpg"
        effects={[{
          brightness: -20,
        }]}
        overlays={[
          {
            text: {
              color: 'white',
              text: `Santa is coming in`.toUpperCase(),
              fontSize: 70,
              fontFamily: 'Oswald'
            },
            position: {
              y: -60
            }
          },
          {
            crop: 'lpad',
            width: 'w_add_50',
            height: 'h_add_50',
            text: {
              color: 'rgb:ffbf00',
              text: `${days} Days  ${hours} Hours`,
              fontSize: 120,
              fontFamily: 'Berkshire Swash',
              fontWeight: 'semibold'
            },
            effects: [{
              blur: 1500
            }],
            position: {
              y: 40
            }
          },
          {
            crop: 'lpad',
            width: 'w_add_50',
            height: 'h_add_50',
            text: {
              color: 'white',
              text: `${days} Days  ${hours} Hours`,
              fontSize: 120,
              fontFamily: 'Berkshire Swash',
              fontWeight: 'semibold'
            },
            position: {
              y: 40
            }
          }
        ]}
        alt="Holiday Card"
      />
    </main>
  )
}
