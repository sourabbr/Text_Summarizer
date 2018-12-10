# Text Summarizer
Summarizes provided text based on the reduction percentage. The algorithm ranks the sentences by scoring the nouns being referenced as pronouns in other sentences. These ranked sentences are accumulated and rendered chronologically based on the reduction percentage. Natural language processing techniques such as POS tagging, stemming, named entity recognition, frequency distribution, and term frequency-inverse document frequency are used. This is hosted as a web application.

### Web Application
[ts.sourabbr.ml](https://ts.sourabbr.ml)

### Docker image of the web app
- [Image for x86](https://hub.docker.com/r/sourabbr/text-summarizer)
- [Image for arm](https://hub.docker.com/r/sourabbr/text-summarizer-arm)
