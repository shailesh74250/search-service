# search-service
Search &amp; Indexing Service


✅ Purpose: Provides full-text search and indexing for large datasets.
✅ Tech Stack: Elasticsearch, Apache Solr, Meilisearch.
✅ Endpoints:

/search?q=keyword

/index/{dataType}

    Scenario	Best Search Algorithm
    Unsorted Array	Linear Search (O(n))
    Sorted Array	Binary Search (O(log n))
    Fast Lookup in Key-Value Store	Hash-Based Search (O(1))
    Searching in Large Text Files	KMP / Boyer-Moore (O(n))
    Graph Search (Shortest Path)	BFS, A*
    Database Queries	B-Tree, Hash Indexing

## Search Algorithm
- Unsorted List
- Sorted List
- Hash-Based Search
- Tree-Based Search
- Graph Searching
- String Search

## Faster Overall
- Hash Table Lookup (O(1))
    - is generally the fastest for key-value searches
- Binary Search (O(log n))
    - best for sorted data
- Bloom Filters (O(1))
    - extremely fast for checking membership with some false positive.

## String based Search JavaScript (Object or Maps)
    - Using Objects

    const data = {};
    data["name"] = "Alice";
    data["age"] = 25;
    console.log(data["name"]); // Alice

    - Using Map (better for large datasets):
    const data = new Map();
    data.set("name", "Alice");
    data.set("age", 25);
    console.log(data.get("name")); // Alice


## Real World Searches
### Search in Databases
- Common Algorigthms:
    - B-Tree / B+ Tree Search
        - Used in relational database like MySQL, PostgreSQL, Orcle 
    - Hash-Based Indexing 
        - Used in NoSQL database like MongoDB, Redis, DynamoDB
    - Real-World Use Cases:
        - SQL Queries: SELECT * FROM users WHERE email = 'xyz@example.com';
        - NoSQL Lookups: Fast key-value retrieval in Redis or DynamoDB.
    - Why 
        - B-Tree allow efficient range queries (age>30)
        - Hash indexing is fast (O(1)) but doesn't support range queries.
### Web Search Engines (Google, Bing, etc.)
- Common Algorithms:
    - Inverted index
    - PageRank Algorigthm
    - BM25 / TF-IDF (Text relevance ranking)
    - Real-World Use cases:
        - Google Search: Finds the most relevant webpages for a query.
        - Elasticsearch, Algolia, Solr: Used for fast website search.
    - Why:
        - Inverted index allows fast full-text searching
        - PageRank ranks pages based on link popularity
### Searching in E-Commerce & Marketplaces (Amazon, eBay, etc.)
- 🔹 Common Algorithms:
    - ✅ Inverted Index (Elasticsearch, Solr) → Fast product search 
    - ✅ Personalized Search (Machine Learning-based) → Used for ranking search results
    - ✅ Trie Search → Used for autocomplete suggestions

    - 🛠️ Real-World Use Cases:
        - Amazon Search: Finds the best-matching products.
        - eBay Search: Uses an AI-driven search engine to rank results.
    - Autocomplete: Uses a Trie for instant suggestions.
    - 🔹 Why?
        - Users expect real-time results with ranking based on relevance.
        -Machine learning improves personalized search results.

### Searching in Social Media (Facebook, Twitter, Instagram, LinkedIn)
- 🔹 Common Algorithms:
    - ✅ Graph Search (BFS, DFS, A)* → Used for social network relationships
    - ✅ Inverted Index (Full-Text Search) → Used in social media posts and hashtags
    - ✅ Vector Search (AI-based) → Used in Instagram’s "Similar Images" search
    - 🛠️ Real-World Use Cases:
        - Facebook Search: Finds friends or pages using graph traversal.
        - Twitter Hashtag Search: Uses inverted indexes for fast lookup.
        - LinkedIn Connections: Uses BFS for "People You May Know".
    - 🔹 Why?
        - Social media data is a graph → Graph-based searches are efficient.
        - Text-based searches need an inverted index for speed.


### Searching in AI & Machine Learning Applications
- 🔹 Common Algorithms:
    - ✅ A Search Algorithm* → Used in pathfinding (Google Maps, self-driving cars).
    - ✅ Vector Search (FAISS, Annoy, HNSW) → Used in AI-powered recommendations.
    - ✅ K-Nearest Neighbors (KNN) Search → Used for image/video/audio similarity.
    - 🛠️ Real-World Use Cases:
        - Google Maps / Uber Routing: A* algorithm finds the fastest route.
        - Spotify / Netflix Recommendations: AI-driven vector search for similar songs/movies.
    - Facial Recognition (Apple Face ID): Uses KNN search in high-dimensional space.

    🔹 Why?
        - AI-based recommendations rely on similarity search rather than exact matching.
        - Vector search is optimized for high-dimensional AI data.


### Searching in File Systems & Operating Systems
- Common Algorithms:
    - ✅ Binary Search (FAT, NTFS, ext4 File Systems) → Used in OS file systems.
    - ✅ Trie Search (File Auto-Completion in Terminals) → Used in Unix/Linux.  
    - ✅ B-Tree Search (Databases, Indexing) → Used in high-performance file storage.
    - 🛠️ Real-World Use Cases:
        - Windows / macOS File Search: Uses B-Trees for quick file lookups.
        - Unix/Linux Command Autocomplete: Uses a Trie structure.
    -🔹 Why?
        - Fast disk-based searches need B-Trees (optimized for storage).
        - Autocomplete needs Trie-based searching.

### Searching in Gaming & AI Bots
- 🔹 Common Algorithms:
    - ✅ Minimax Algorithm (with Alpha-Beta Pruning) → Used in AI for decision-making.  
    - ✅ A Search Algorithm* → Used for pathfinding in game maps.
    - ✅ Monte Carlo Tree Search (MCTS) → Used in AI for board games (Chess, Go).
    - 🛠️ Real-World Use Cases:
        - AI in Chess (Stockfish, AlphaZero) uses Minimax & MCTS.
        - Pathfinding in Games (Unity, Unreal Engine) uses A* Search.
    - 🔹 Why?
        - Game AI needs real-time decision-making → Minimax helps bots "think."
        - Pathfinding in large maps needs A for efficiency*.

    

        - Summary: Most Used Search Algorithms in Real-World Applications
            - Domain	Search Algorithm	Use Case
            - Databases	B-Tree, Hash-Based Search	SQL, NoSQL Queries
            - Search Engines	Inverted Index, PageRank	Google, Bing
            - E-Commerce	Elasticsearch, Trie Search	Amazon, eBay Search
            - Social Media	Graph Search, Full-Text Search	Facebook, Twitter, LinkedIn
            - AI/ML Recommendations	Vector Search (FAISS, HNSW, KNN)	Netflix, Spotify, Instagram
            - Navigation & Maps	A* Search Algorithm	Google Maps, Uber
            - Operating Systems	B-Tree, Trie Search	File Systems, Autocomplete
            - Gaming AI	Minimax, Monte Carlo Tree Search	Chess AI, Video Games

- Conclusion
    - Databases use B-Trees & Hash-Based Indexing.
    - Search engines rely on Inverted Index & AI-driven ranking.
    - AI applications use Vector Search for similarity searches.
    - Pathfinding in games & maps uses A Search.*