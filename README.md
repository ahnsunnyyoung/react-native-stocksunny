# Sunyoung Ahn, Theophane

## System Requirments
* 

## Language & version
* Python 3

## list of code and instroduction
### scrapping.py
* input :  python scrapping.py <outfolder>
* output : scrapped documents in <outfolder>

### preprocessing.py
* input : python preprocessing.py <infolder> <outfolder> <stopwords file name>
* output : preprocessed documents in <outfolder> 

### stemmer.py
* PorterStemmer class used for preprocess

### inverted_index.py
* input : python inverted_index.py <infolder> <outfile>
* output : inverted index file as <outfile>
* ouput example
```
campu	D1[2]	D16[2]	D17[2]	
natur	D3[1]
arrang	D2[1]
```

### TF_IDF.py
* input : python TF_IDF.py <infile> <outfile>
* output : TF IDF file as <outfile>
* output example
  ```
  D1 D2
  campu 0 0
  natur 0 0
  arrang 0 0.301
  ```

### cosine_similarity.py
* input :  python cosine_similarity.py <infile> D1 D2
* output : cosine similarity between two documents (D1, D2)
* output example : 0.723

### IR.py
* input :  python IR.py <folder_name> “Great” <stopwords file>
* output : Ordered document list by similarity with query("Great")
* output example
  ```
D10 0.8 
D4 0.4
...
  ```

## Installation
* pip install scrapy

