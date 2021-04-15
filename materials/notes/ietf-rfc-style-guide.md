# [IETF RFC Style Guide](https://tools.ietf.org/html/rfc7322)

> lisibles, clairs, cohérents et raisonnablement uniformes

format établit en 1970s par Jon Postel, le premier RFC Editor

## Processus

Paradoxe : Internet Draft (I-D) précède une RFC

Règle d'or des éditeurs : « do not change the intended meaning of the text ».
Garder une bonne "balance éditoriale" (tension entre auteur et éditeur)

## Structure

Résumé (abstract) obligatoire : « to give a technically knowledgeable reader a general overview of the function of the document »

### Corps

```text
First-page header                      * [Required]
Title                                    [Required]
Abstract                                 [Required]
RFC Editor or Stream Note              * [Upon request]
Status of This Memo                    * [Required]
Copyright Notice                       * [Required]
Table of Contents                      * [Required]
Body of the Memo                         [Required]
  1.  Introduction                       [Required]
  2.  Requirements Language (RFC 2119)
  3.  ...
      MAIN BODY OF THE TEXT
  6.  ...
  7.  IANA Considerations                [Required in I-D]
  8.  Internationalization Considerations
  9.  Security Considerations            [Required]
  10.  References
  10.1.  Normative References
  10.2.  Informative References
  Appendix A.
  Appendix B.
Acknowledgements
Contributors
Author's Address                         [Required]
```

- Intro
  - expliquer ses motivations
  - dire à quoi sert le document ("applicability")
    - protocol
    - discussion of some problem
    - is simply of interest to the Internet community
    - status report on some activity
- security (4.8.5)
- références complètes « solely for recording reference entries »

## Règles d'écriture

[Chicago Manual of Style (CMOS)](https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html)
inconsistances : éviter que des termes soient présentés sous différentes formes

règles stricts de ponctuation (3.2), capitalisation (3.4), citation (3.5) et abbréviation (3.6)

[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119) :

- bon usage de MUST, SHOULD, MAY, et leurs négations
- souvent indiqué en début de RFC (section 2), mais optionnel, et peut être remplacé par une autre convention (4.8.2)

Des indications qui aident l'écriture plutôt que la contraindre :

- les éléments stricts (header, numéro de série, etc.) « will be supplied by the RFC Editor during the editorial process when necessary » (4)
- des indications comme « Usually, an Abstract should begin with a phrase like "This memo ..." or "This document ..." » et « the Abstract should be complete in itself » (4.3) ou encore « This may result in some duplication of text between the Abstract and the Introduction; this is acceptable. » (4.8)
