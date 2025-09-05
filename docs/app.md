# nome do aplicativo

Podcast Menager

### Descrição

Um app ao estilo netflix aonde eu possa centralizar diferentes episodios de podcastseparados por categorias

### Dominio

### Features/ funcionalidades

Precisa listar os podcast em sessões de categorias
-[saude, fitness, mentalidade, humor]
-filtrar episodios por nome de podcast

## Como

#### Feature:
  Listar os episodios do podcast em sessoes de categorias

### Como vou implementar: 
    Vou retornar em uma api rest o nome do podcast, nome do episodio, imagem de capa, link, category.

    ```js
    [
    {
        "podcastName": "olga",
        "episodio": "Francella en Olga #1",
        "videoId":"1826G4bqAlQ",
        "category": ["noticias" , "humor"]
    },
    {
        "podcastName": "martin",
        "episodio": "Baleias no morro das pedras #1",
        "videoId":"HJjr4kuPKK4",
        "category": ["viagens", "natureza"]
    }
]
    ```

