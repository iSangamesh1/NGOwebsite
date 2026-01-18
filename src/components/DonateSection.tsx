import { Heart, HandHeart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { useState } from "react";

const DonateSection = () => {
  const [open, setOpen] = useState(false);
  // const handleDonate = () => {
  //   document
  //     .getElementById("donate-details")
  //     ?.scrollIntoView({ behavior: "smooth" });
  // };  

  return (
    <>
      <section className="py-20 px-4 donate-gradient">
        <div className="max-w-3xl mx-auto text-center text-secondary-foreground">
          <HandHeart className="w-20 h-20 mx-auto mb-6 animate-pulse-gentle" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Mission
          </h2>
          
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Your generous donation helps us provide quality education, care, and a loving home 
            for special needs children. Every contribution makes a difference.
          </p>
          
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90 text-lg px-10 py-6 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate Now
          </Button>
          
          <p className="mt-8 text-sm opacity-80">
            You can also contact us directly for donations. All contributions are gratefully received.
          </p>
        </div>
      </section>
      {/* Donation Popup */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Donation Details
            </DialogTitle>

            {/* <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
              <X className="h-4 w-4" />
            </DialogClose> */}
          </DialogHeader>

          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              You may contribute directly using the bank details below.
            </p>

            <div className="bg-muted/40 rounded-xl p-4 space-y-2">
              <p><strong>Account Name:</strong> MAULANA AAZAD MINORITY EDUCATION & WELFAIR SOCIETY ISOLI</p>
              <p><strong>Bank:</strong> State Bank of India</p>
              <p><strong>Account No:</strong> 32719468829</p>
              <p><strong>IFSC:</strong> SBIN0002423</p>
            </div>

            <p className="text-xs text-muted-foreground">
              After donating, please contact us for confirmation or receipt.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonateSection;
