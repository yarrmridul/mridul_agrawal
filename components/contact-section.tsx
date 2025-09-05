"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!res.ok) throw new Error("Failed to send")

    // ✅ Reset form if success
    setFormData({ name: "", email: "", message: "" })
    alert("✅ Message sent successfully!")
  } catch (err) {
    console.error(err)
    alert("❌ Something went wrong. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="bg-card/60 glassmorphism border-0 hover:bg-card/80 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=""
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input/80 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input/80 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder=""
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-input/80 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
                I'm always interested in discussing new opportunities, innovative projects, and ways to create
                measurable business impact through technology and operations.
              </p>

              <div className="space-y-6">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="mridulagrawal06@gmail.com"
                  href="mailto:mridulagrawal06@gmail.com"
                />

                <ContactItem icon={Phone} label="Phone" value="+91 7983738443" href="tel:+917983738443" />

                <ContactItem icon={MapPin} label="Location" value="Mathura, India" href="#" />
              </div>
            </div>

            {/* Response Time */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-card/60 glassmorphism rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-card-foreground">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactItemProps {
  icon: React.ElementType
  label: string
  value: string
  href: string
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 group"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
          {value}
        </p>
      </div>
    </a>
  )
}
