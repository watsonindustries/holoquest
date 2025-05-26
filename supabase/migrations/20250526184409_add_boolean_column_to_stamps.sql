-- Add a new boolean column to the stamps table
ALTER TABLE public.stamps 
ADD COLUMN is_visible BOOLEAN NOT NULL DEFAULT true;

-- Add a comment to describe the column
COMMENT ON COLUMN public.stamps.is_visible IS 'Indicates whether the stamp is visible to users';
