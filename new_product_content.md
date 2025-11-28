# Strategic Financial Intelligence Agent

## Product Overview
**Name:** InvestIQ
**Tagline:** Intelligent Document Analysis for Smarter Investing
**Description:** A powerful AI-driven assistant designed to empower investors by analyzing complex financial documents and providing context-aware, actionable insights. Powered by Google Gemini and advanced RAG technology, it turns static documents into interactive financial intelligence.

## Hero Section Content
- **Badge:** Next-Gen Financial AI
- **Title:** InvestIQ <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Financial Intelligence</span>
- **Description:** Powered by Maheshwara.ai - Advanced document analysis, semantic search, and real-time financial queries. Decode your financial data with AI that understands context.
- **Stats:**
    - "Multi-Format Support" (PDF, DOCX, PPTX)
    - "< 1s Response Time"
    - "Context-Aware Accuracy"

## Features (for Features.tsx)
1.  **Multi-Format Ingestion**
    -   **Subtitle:** Seamless Document Analysis
    -   **Description:** Effortlessly ingest and analyze diverse financial documents including PDFs, Word documents, and PowerPoint presentations.
    -   **Tags:** ["PDF Support", "DOCX Parsing", "PPTX Analysis", "Universal Import"]
    -   **Icon:** FileText (Lucide)
    -   **Color:** from-blue-600/90 to-indigo-900/90

2.  **Intelligent Retrieval (RAG)**
    -   **Subtitle:** Context-Aware Search
    -   **Description:** Utilizes ChromaDB for efficient vector storage and semantic search, ensuring answers are grounded strictly in your data.
    -   **Tags:** ["Vector DB", "Semantic Search", "ChromaDB", "High Precision"]
    -   **Icon:** Database (Lucide)
    -   **Color:** from-purple-600/90 to-fuchsia-900/90

3.  **Advanced AI Reasoning**
    -   **Subtitle:** Gemini Powered Intelligence
    -   **Description:** Leverages Google Gemini (1.5 Flash) for superior natural language understanding, summarization, and complex query resolution.
    -   **Tags:** ["Google Gemini", "LLM", "Generative AI", "Deep Reasoning"]
    -   **Icon:** BrainCircuit (Lucide)
    -   **Color:** from-emerald-600/90 to-teal-900/90

4.  **Interactive Analytics**
    -   **Subtitle:** User-Centric Interface
    -   **Description:** A intuitive, interactive interface that allows investors to chat with their documents and visualize key financial metrics.
    -   **Tags:** ["Interactive Chat", "Data Viz", "User Friendly", "Streamlit/React"]
    -   **Icon:** MessageSquareText (Lucide)
    -   **Color:** from-orange-600/90 to-red-900/90

5.  **Secure Data Handling**
    -   **Subtitle:** Enterprise Grade Security
    -   **Description:** Ensures your sensitive financial data is processed securely with state-of-the-art encryption and privacy standards.
    -   **Tags:** ["Encryption", "Privacy First", "Secure Processing", "Compliance"]
    -   **Icon:** ShieldCheck (Lucide)
    -   **Color:** from-cyan-600/90 to-blue-900/90

6.  **Real-time Insights**
    -   **Subtitle:** Instant Financial Answers
    -   **Description:** Get immediate answers to complex financial questions, trend analysis, and risk assessments without manual digging.
    -   **Tags:** ["Real-time", "Instant Answers", "Trend Analysis", "Risk Assessment"]
    -   **Icon:** Zap (Lucide)
    -   **Color:** from-yellow-600/90 to-amber-900/90

## Use Cases (for UseCases.tsx)
1.  **Investment Research**
    -   **Description:** Rapidly analyze annual reports and 10-Ks to extract key performance indicators and strategic direction.
2.  **Due Diligence**
    -   **Description:** Automate the review of legal documents and contracts to identify potential risks and red flags.
3.  **Portfolio Management**
    -   **Description:** Monitor and compare performance across multiple assets by synthesizing data from various quarterly reports.
4.  **Risk Assessment**
    -   **Description:** Identify market risks and operational challenges hidden within lengthy financial disclosures.

## Technology Stack (for Technology.tsx)
-   **Core:** Python 3.10+
-   **AI Model:** Google Gemini API (`gemini-1.5-flash`, `gemini-embedding-001`)
-   **Vector DB:** ChromaDB
-   **Orchestration:** LangChain
-   **Frontend:** React / Streamlit (Adapted)
-   **Parsers:** `pdfplumber`, `python-docx`, `python-pptx`
