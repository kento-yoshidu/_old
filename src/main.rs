use std::fs::File;
use std::path::Path;
use image::ImageReader;
use image::codecs::jpeg::JpegEncoder;
use image::ColorType;

pub fn compress_jpeg(input_path: &str, output_path: &str, quality: u8) -> Result<(), Box<dyn std::error::Error>> {
    let img = ImageReader::open(input_path)?.decode()?.to_rgb8();

    let output_file = File::create(&Path::new(output_path))?;

    let mut encoder = JpegEncoder::new_with_quality(output_file, quality);

    encoder.encode(&img, img.width(), img.height(), ColorType::Rgb8.into())?;

    Ok(())
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    compress_jpeg("input.jpg", "output.jpg", 70)?;
    Ok(())
}
