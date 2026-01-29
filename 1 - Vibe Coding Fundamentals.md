# Vibe Coding Fundamentals
*Part of the [Vibe Coding Workshop](https://eisenbruch.github.io/vibe-coding-workshops/) series* \
*By Noah Eisenbruch - noaheisenbruch@gmail.com*
<table>
<tr>
<td width="70%" valign="top">

Access workshop resources, updates, projects, and more at:
<a href="https://eisenbruch.github.io/vibe-coding-workshops/" target="_blank">https://eisenbruch.github.io/vibe-coding-workshops/</a>
<a href="https://linkp.ee/r/workshop" target="_blank">https://linkp.ee/r/workshop</a>


Click *Watch* on the <a href="https://github.com/eisenbruch/vibe-coding-workshops" target="_blank">GitHub repository</a> to be notified of resource updates and participant project uploads.
</td>
<td width="30%" valign="top">

<img src="images/github-site-qr.png" alt="GitHub QR Code" width="128">

</td>
</tr>
<tr>
<td width="70%" valign="top">

Your feedback is greatly appreciated and helps shape future workshops.

Please fill out our feedback form after the workshop:
<a href="https://forms.gle/3iVRWgUS6o8U51Ut5" target="_blank">https://forms.gle/3iVRWgUS6o8U51Ut5</a>

</td>
<td width="30%" valign="top">

<img src="images/feedback-form-qr.png" alt="Feedback Form QR Code" width="128">

</td>
</tr>
</table>

## Table of Contents

<table>
<tr>
<td width="50%" valign="top">

**This Document:**

[1. Example Projects](#example-projects)

[2. Core Approaches](#core-approaches) (The Vibe Coding Spectrum)

[3. Good Prompts vs Bad Prompts](#good-prompts-vs-bad-prompts)

[4. Resources & Support](#resources--support)

</td>
<td width="50%" valign="top">

**Workshop Path:**

[2 - Choosing Your Tools](2%20-%20Choosing%20Your%20Tools.md)

[3 - Project Setup & Git](3%20-%20Project%20Setup%20&%20Git.md)

[4 - Building Your Project](4%20-%20Building%20Your%20Project.md)

[5 - Firebase & Deployment](5%20-%20Firebase%20&%20Deployment.md)

**Reference:**

[Advanced Techniques](Advanced%20Techniques.md) | [AI Tools Directory](AI%20Tools%20Directory.md) | [Project Idea Prompts](Project%20Idea%20Prompts%20-%20Extended.md)

</td>
</tr>
</table>

---

## Example Projects

**1. Glitch QR** (<a href="https://github.com/eisenbruch" target="_blank">github.com/eisenbruch/glitch-qr</a>)
- **Type:** QR code generation with a twist
- **Key Learning:** You can vibe code a simple tool in minutes, and it's fun

**2. Snark AI** (<a href="https://snark-ai.com" target="_blank">snark-ai.com</a>)
- **Type:** Satirical AI email service
- **Key Learning:** Vibe coding actually works to make services and websites

**3. Nerktendo** (<a href="https://nerktendo.com" target="_blank">nerktendo.com</a>)
- **Type:** Retro interface and portfolio
- **Key Learning:** Sometimes AI is really bad at things. Try different tools and dive deeper into vibe coding.

**4. LinkPee** (<a href="https://linkp.ee" target="_blank">linkp.ee</a>)
- **Type:** Fully functional "link in bio" service with secure authentication & user profiles
- **Key Learning:** "Complex" features are absolutely achievable

**5. Weather Worsener** (<a href="https://nerktendo.com/weather-worsener" target="_blank">nerktendo.com/weather-worsener</a>)
- **Type:** Interactive game
- **Key Learning:** Fun and loose iterative projects are great for experimenting with concepts and mechanics and allow you to explore concepts and themes freely.

**6. DomainFlip** (<a href="https://nerktendo.com/domainflip" target="_blank">nerktendo.com/domainflip</a>)
- **Type:** Investor-ready startup demo
- **Key Learning:** Clear vision + detailed context = polished results

**7. TrafficVision.Live** (<a href="https://trafficvision.live/?utm_source=vibe-coding-cheatsheet&utm_medium=resource&utm_campaign=example-project" target="_blank">trafficvision.live</a>)
- **Type:** Interactive map and database service with user focused features
- **Key Learning:** AI takes time to discover things like humans (optimization) and needs to take similar approaches a human would. They may need to be guided towards a solution.

**Other Projects**
- Raspberry Pi powered instant camera - prints instant picture stickers with text, current date/time
- Blender Addon that optimally rotates a 3D object to minimize its bounding box - usefull for manufacturing processes

> **Key Takeaway:** Don't limit yourself. If you think it should exist (no matter how silly), just try to create it. Vibe coding can make testing concepts easier than creating a mockup.

> **Remember:** AI can help with more than just  code - it can help prototype your hardware, organize your files, and much more.
---

## Core Approaches

### The Vibe Coding Spectrum

All projects exist somewhere on this spectrum between two approaches:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         THE VIBE CODING SPECTRUM                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   MINIMAL INFO                                              COMPREHENSIVE   │
│   Iterative Refinement                                    Brief → Execute   │
│                                                                             │
│   ○─────────────────────────────────────────────────────────────────────○   │
│   │                                 │                                   │   │
│   ▼                                 ▼                                   ▼   │
│   Nerktendo                  Weather Worsener                  DomainFlip   │
│                                  LinkPee                                    │
│                                                                             │
│   • Start broad                                        • Define everything  │
│   • Refine through                                       upfront            │
│     conversation                                       • Features, style,   │
│   • Great for exploring                                  structure, rules   │
│   • Lower barrier                                      • Faster to polish   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Approach 1: Minimal Info → Iterative Refinement

**Example:** <a href="https://nerktendo.com/" target="_blank">Nerktendo</a>

**How it works:** Start broad, refine through back-and-forth conversation

**✅ Pros:**
- Great for exploring possibilities and experimenting
- Sparks creative directions you wouldn't think of
- Lower barrier to starting

**❌ Cons:**
- Takes more back-and-forth
- May drift from original vision
- Can be difficult to guide refinement with minimal info

#### Approach 2: Comprehensive Brief → Execute

**Example:** <a href="https://nerktendo.com/domainflip" target="_blank">DomainFlip</a>

**How it works:** Define everything upfront - features, style, structure, functions, rules, edge cases

**✅ Pros:**
- Faster to a feature-full, polished result
- Stays true to vision
- Better for complex requirements

**❌ Cons:**
- Requires knowing what you want
- Less room for discovery
- Harder for beginners to write good briefs (but use AI to help)

**How to do it:** Use an LLM (not a coding AI) to create comprehensive planning documents before you start coding.

**DomainFlip workflow:**
1. **Planning phase**: I asked the an AI chatbot to create a comprehensive plan for building a website that is designed to be passed to an AI coding agent so it would know exactly what to build without any room for interpretation. I described my idea with all the details I had thought of so far and asked the chatbot to help build out the idea into a full company and product plan.
2. **Document creation**: The AI asked clarifying questions to complete the product idea, then developed 8 detailed documents covering:
   - Project overview and goals
   - Technical architecture
   - Design specifications
   - Feature requirements and edge cases
3. **Execution phase**: I fed all documents to Claude Code in a single prompt
4. **Result**: One hour later, the complete site was built exactly to spec

**The key:** comprehensive upfront documentation eliminates ambiguity and reduces iteration.

> **Pro Tip:** Use an AI chatbot (not coding assistant) to plan your project in detail, then feed that plan to an AI coding agent. DomainFlip was created with only 1 Claude Code prompt, but it was fed 8 different multi page documents outlining the entire project in extreme detail.

> **Bonus:** Read through the <a href="https://github.com/eisenbruch/vibe-coding-workshops/tree/master/docs/domainflip" target="_blank">DomainFlip summary and build documents</a>

### Good Prompts vs Bad Prompts

| ❌ Bad Prompt | ✅ Good Prompt |
|--------------|----------------|
| "Make me a website" | "Create a single-page portfolio site with a hero section, 3 project cards, and a contact form. Use a dark theme with blue accents." |
| "Fix it" | "The submit button doesn't work. When I click it, nothing happens. No errors in console. Here's the relevant code: [paste code]" |
| "Add a database" | "Add a SQLite database to store user tasks. Include fields for: id, title, description, due_date, completed (boolean). Create functions for CRUD operations." |
| "Make it look better" | "Improve the card component: add subtle shadows, rounded corners (8px), and a hover effect that slightly lifts the card." |
| "It's broken" | "Expected: clicking 'Save' should show a success message. Actual: page refreshes and data is lost. Browser: Chrome. Error in console: [paste error]" |

**Key principles:**
- Be specific about what you want
- Include relevant context (tech stack, constraints, goals)
- When reporting bugs: expected vs actual behavior + any errors
- Describe the outcome, not just the task