import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    title: "Permission Certificate",
    filename: "document-1.pdf",
    description: "Official Permission documents",
  },
  {
    title: "12 ATG",
    filename: "document-2.pdf",
    description: "Official 12 ATG Document",
  },
  {
    title: "Minority Certificate",
    filename: "document-3.pdf",
    description: "Minority Certificate from Government",
  },
  {
    title: "Registration Certificate",
    filename: "document-4.pdf",
    description: "Official registration documents",
  },
  {
    title: "Registration Certificate 2",
    filename: "document-5.pdf",
    description: "Official registration document second one",
  },
  {
    title: "Commissionerate for Persons with Disabilities",
    filename: "document-6.pdf",
    description: "Official document from Special Ability Peoples",
  },
  {
    title: "Women's help & Counselling Center",
    filename: "document-7.pdf",
    description: "Official document Women's help & Counselling Center",
  },
];

const DocumentsSection = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Documents
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground text-lg">
            Download and view our official documents
          </p>
        </div>
        
        <div className="grid gap-4 md:gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="card-elevated bg-card rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {doc.description}
                  </p>
                </div>
              </div>
              
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a
                  href={`/documents/${doc.filename}`}
                  download
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
