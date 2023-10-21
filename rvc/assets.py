import os
import requests
import zipfile


def download_file(url, filename):
    response = requests.get(url, stream=True)
    with open(filename, "wb") as file:
        for chunk in response.iter_content(chunk_size=8192):
            file.write(chunk)


def prepare_assets():
    current_path = os.getcwd()

    # Download hubert_base.pt if it doesn't exist
    hubert_file = "hubert_base.pt"
    if not os.path.exists(os.path.join(current_path, hubert_file)):
        print(f"Downloading {hubert_file}...")
        download_file(
            "https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/hubert_base.pt",
            hubert_file,
        )
    else:
        print(f"{hubert_file} already exists. Skipping download.")

    # Download and unzip kokomi-kr.zip
    kokomi_file = "kokomi-kr.zip"
    print(f"Downloading {kokomi_file}...")
    download_file(
        "https://huggingface.co/benitheworld/kokomi-kr/resolve/main/kokomi-kr.zip",
        kokomi_file,
    )

    print(f"Unzipping {kokomi_file}...")
    with zipfile.ZipFile(kokomi_file, "r") as zip_ref:
        zip_ref.extractall(current_path)

    # Remove the zip file after extraction
    os.remove(kokomi_file)
    print(f"Removed {kokomi_file} after extraction.")
