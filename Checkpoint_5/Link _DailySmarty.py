import requests
import inflection
from bs4 import BeautifulSoup

r = requests.get('https://www.dailysmarty.com/topics/python')
soup = BeautifulSoup(r.text, 'html.parser')
titulos_post = soup.find_all('a')

for titulo in titulos_post:
  url = titulo['href']

  if url.startswith('/posts/'):
    texto_del_url = url[7:]

    texto = texto_del_url.replace('-', ' ')

    texto_final = inflection.titleize(texto)

    print(texto_final)
