-- Update image_url for stamps with Twitter profile pictures

UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/rosuuri' WHERE hash = '7457a35c8fc649c586e700d1fa7912dca294b8693dd631c739a428b172d328aa';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/eternals' WHERE hash = '0be338798a2c6a815b46c0f662626ede99141abc67f0beb1e08ae4e7116185ce';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/NAMIORII' WHERE hash = '54ad56f028f09660f94cad4c2643b4089b6b14e1997551ea755c44a22ccdb802';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/elmi_hikaribi' WHERE hash = 'ae5f22096ba348a17c266e3a71fe06a34cf4c0404d9616135333a6f3273008bd';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/blueberylpie' WHERE hash = 'd77efe5b996b42d51e99957a2cfa3499c61c27ea8734b551729c6a9a12ed5f7e';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/_inkotori' WHERE hash = '0397eb83e2727f3faa8248f860d703c90840d281ec9f2490db071110b87f5c23';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/ghosttbyun' WHERE hash = 'f82425e3718231b736f56bb3fb7f1f13c9fb1c5b268c942bf79650f2fa516c85';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/elfboi_' WHERE hash = 'fde01f3bfac9a5e61d9abb1f542ab16075b8d41b2ada53768ad8528ec6a858b6';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/minyaart' WHERE hash = '72def7c4a773d9f00483c069f6496bf0275b395d8ef3599989a859733af99f4c';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/YiruBunni' WHERE hash = '52f018421577aaaa9382e35445e7a859b11c9f21012a9405373da9c9ed889b9a';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/Phibonnachee' WHERE hash = 'b74647018c85aefc51548d94bd0d5627e724654bd5b64e8b9a060e41a51d2e7a';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/_beescuit_' WHERE hash = 'c3957aff1ab7cb8cad374f437bfa236ada5adbcf42bf4354ec37eb2c6fd90f9e';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/keaworks' WHERE hash = '7c0fefd5295f65bcfbcb48e2957a097dc2bbab969184c7f8e623bd01f521fcce';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/cyclic_red' WHERE hash = '08e961e37e5177a9e59fb69b8904a773a7b2dd34a9801cafae8621a5396dac16';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/ayamy_garubinu' WHERE hash = 'b1cb4f3fc9457cb007d298c84b489f92850fda7b9fe6e15538486f980fd2920b';
UPDATE public.stamps SET image_url = 'https://unavatar.io/twitter/juwei_' WHERE hash = 'c6e8edf293916f56c791abc2d95fee74fad19fae7f795069317fdbcef0485c8b';

-- Add comment about the update
COMMENT ON COLUMN public.stamps.image_url IS 'Profile pictures fetched from Twitter/X.com';