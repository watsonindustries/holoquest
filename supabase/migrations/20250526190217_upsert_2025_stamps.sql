-- Upsert stamps from 2025_updated.csv
-- Using INSERT ... ON CONFLICT to handle duplicates

INSERT INTO public.stamps (name, hash, description, external_url, event_id, nsfw, booth_id, is_visible)
VALUES 
  ('Rosuuri', '7457a35c8fc649c586e700d1fa7912dca294b8693dd631c739a428b172d328aa', 'https://x.com/rosuuri', 'https://my.dokomi.de/de/con/exhibitors/2781', 2, false, '3E14', true),
  ('Ten', '0be338798a2c6a815b46c0f662626ede99141abc67f0beb1e08ae4e7116185ce', 'https://x.com/eternals', 'https://my.dokomi.de/de/con/exhibitors/5310', 2, false, '1B34', true),
  ('Namii & Shifty', '54ad56f028f09660f94cad4c2643b4089b6b14e1997551ea755c44a22ccdb802', 'https://x.com/NAMIORII', 'https://my.dokomi.de/de/con/exhibitors/5039', 2, false, '3K44', true),
  ('Elmi', 'ae5f22096ba348a17c266e3a71fe06a34cf4c0404d9616135333a6f3273008bd', 'https://x.com/elmi_hikaribi', 'https://my.dokomi.de/de/con/exhibitors/4289', 2, false, '3F13', true),
  ('Beryl', 'd77efe5b996b42d51e99957a2cfa3499c61c27ea8734b551729c6a9a12ed5f7e', 'https://x.com/blueberylpie', 'https://my.dokomi.de/de/con/exhibitors/5160', 2, true, '5E73', true),
  ('Erizu', '0397eb83e2727f3faa8248f860d703c90840d281ec9f2490db071110b87f5c23', 'https://x.com/_inkotori', 'https://my.dokomi.de/de/con/exhibitors/6379', 2, false, '3J103', true),
  ('Ghostbyun', 'f82425e3718231b736f56bb3fb7f1f13c9fb1c5b268c942bf79650f2fa516c85', 'https://x.com/ghosttbyun', 'https://my.dokomi.de/de/con/exhibitors/4289', 2, false, '3F13', true),
  ('Theo', 'fde01f3bfac9a5e61d9abb1f542ab16075b8d41b2ada53768ad8528ec6a858b6', 'https://x.com/elfboi_', 'https://my.dokomi.de/de/con/exhibitors/5872', 2, false, '3M36 & 5G83', true),
  ('minyaa', '72def7c4a773d9f00483c069f6496bf0275b395d8ef3599989a859733af99f4c', 'https://x.com/minyaart', 'https://my.dokomi.de/de/con/exhibitors/3656', 2, false, '3F108', true),
  ('Yiru', '52f018421577aaaa9382e35445e7a859b11c9f21012a9405373da9c9ed889b9a', 'https://x.com/YiruBunni', 'https://my.dokomi.de/de/con/exhibitors/6058', 2, false, '10C01 & 5J89', true),
  ('Phib', 'b74647018c85aefc51548d94bd0d5627e724654bd5b64e8b9a060e41a51d2e7a', 'https://x.com/Phibonnachee', 'https://my.dokomi.de/de/con/exhibitors/6058', 2, false, '10C01', true),
  ('𝒃 𝒆 𝒆', 'c3957aff1ab7cb8cad374f437bfa236ada5adbcf42bf4354ec37eb2c6fd90f9e', 'https://x.com/_beescuit_', 'https://my.dokomi.de/de/con/exhibitors/5506', 2, false, '3D47', true),
  ('kea', '7c0fefd5295f65bcfbcb48e2957a097dc2bbab969184c7f8e623bd01f521fcce', 'https://x.com/keaworks', 'https://my.dokomi.de/de/con/exhibitors/2782', 2, false, '3G77', true),
  ('CYCLIC★REDUNDANCY', '08e961e37e5177a9e59fb69b8904a773a7b2dd34a9801cafae8621a5396dac16', 'https://x.com/cyclic_red', 'https://my.dokomi.de/de/con/exhibitors/3136', 2, false, '1B47', true),
  ('Ayamy', 'b1cb4f3fc9457cb007d298c84b489f92850fda7b9fe6e15538486f980fd2920b', 'https://x.com/ayamy_garubinu', NULL, 2, false, '3A45 & 5C19', true),
  ('Juwei', 'c6e8edf293916f56c791abc2d95fee74fad19fae7f795069317fdbcef0485c8b', 'https://x.com/juwei_', 'https://my.dokomi.de/de/con/exhibitors/3590', 2, false, '3M34 & 5G84', true)
ON CONFLICT (hash) 
DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  external_url = EXCLUDED.external_url,
  event_id = EXCLUDED.event_id,
  nsfw = EXCLUDED.nsfw,
  booth_id = EXCLUDED.booth_id,
  is_visible = EXCLUDED.is_visible,
  created_at = COALESCE(stamps.created_at, NOW());

-- Add comment about the migration
COMMENT ON TABLE public.stamps IS 'Stamps table updated with 2025 event data';
