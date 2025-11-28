import requests
import fitz  # PyMuPDF
import os
import io

pdf_url = "https://padariamonza.com.br/wp-content/uploads/2025/06/cardapio-encomendas.pdf"
output_dir = "public/images/cardapio"

def download_pdf(url):
    print(f"Baixando PDF de {url}...")
    response = requests.get(url)
    if response.status_code == 200:
        return io.BytesIO(response.content)
    else:
        print(f"Erro ao baixar PDF: {response.status_code}")
        return None

def extract_images_from_pdf(pdf_stream, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    doc = fitz.open(stream=pdf_stream, filetype="pdf")
    print(f"PDF aberto. Total de páginas: {len(doc)}")
    
    image_count = 0
    
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images(full=True)
        
        print(f"Página {page_index + 1}: {len(image_list)} imagens encontradas.")
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            image_filename = f"cardapio_img_{image_count + 1}.{image_ext}"
            image_path = os.path.join(output_folder, image_filename)
            
            with open(image_path, "wb") as f:
                f.write(image_bytes)
            
            print(f"Imagem salva: {image_filename}")
            image_count += 1

    print(f"Processo concluído. {image_count} imagens extraídas.")

if __name__ == "__main__":
    pdf_content = download_pdf(pdf_url)
    if pdf_content:
        extract_images_from_pdf(pdf_content, output_dir)
