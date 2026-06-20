import base64
import io
import os
from PIL import Image, ImageDraw

# =====================================================
# PASTE YOUR BASE64 IMAGE HERE or provide image path
# =====================================================

# Since the user uploaded via chat, we'll save it from base64
# The shop photo needs to be placed here OR we use a direct path

# ---- METHOD: Read from any image file the user provides ----
# Try common locations
possible_paths = [
    r"C:\Users\priya\OneDrive\Desktop\vino shop.jpg",
    r"C:\Users\priya\OneDrive\Desktop\vino.jpg",
    r"C:\Users\priya\OneDrive\Desktop\shop.jpg",
    r"C:\Users\priya\Downloads\vino shop.jpg",
    r"C:\Users\priya\Downloads\vino.jpg",
    r"C:\Users\priya\OneDrive\Desktop\2.png",
    r"C:\Users\priya\OneDrive\Desktop\AAHAR.png",
    r"C:\Users\priya\OneDrive\Desktop\ele.png",
    r"C:\Users\priya\OneDrive\Desktop\elevation.png",
]

def make_circle(image_path, output_path, size=500):
    """Crop image to circle and save with transparent background"""
    img = Image.open(image_path).convert("RGBA")
    
    # Make it square by center cropping
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    img = img.crop((left, top, left + min_dim, top + min_dim))
    
    # Resize to target size
    img = img.resize((size, size), Image.LANCZOS)
    
    # Create circular mask
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)
    
    # Apply mask
    result = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)
    
    # Add gold border
    border_draw = ImageDraw.Draw(result)
    border_width = 8
    border_draw.ellipse(
        (border_width//2, border_width//2, size - border_width//2, size - border_width//2),
        outline=(201, 168, 76, 255),
        width=border_width
    )
    
    result.save(output_path, "PNG")
    print(f"Circle photo saved: {output_path}")
    return output_path

# Try each path
for path in possible_paths:
    if os.path.exists(path):
        print(f"Found image: {path}")
        output = r"C:\Users\priya\OneDrive\Desktop\vino website\vino_circle.png"
        make_circle(path, output)
        break
else:
    print("Image not found in common locations.")
    print("\nPlease put your shop photo in one of these locations:")
    for p in possible_paths[:5]:
        print(f"   {p}")

