import React from "react";
import { Template } from "tinacms";
import { BiEnvelope, BiLogoFacebook, BiLogoTiktok } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import Section from "../../layout/section";
import { PageBlocksContact } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import {
  getFacebookUsername,
  getInstagramUsername,
  getTiktokUsername,
} from "./social";
import { Container } from "react-bootstrap";

type ContactInfoProps = {
  icon: React.ReactNode;
  href: string;
  title: string;
  tinaField: string;
};
const ContactInfo = ({ icon, href, title, tinaField }: ContactInfoProps) => {
  return (
    <div className="c-contact-info" data-tina-field={tinaField}>
      <div className="c-contact-info__icon d-none d-md-flex position-relative justify-content-between align-items-center mt-3 align-self-stretch">
        <div className="fs-2 d-flex justify-content-center align-items-center">
          {icon}
        </div>
        <a
          className="flex-grow-1 stretched-link fs-4 ms-3 d-none d-md-inline text-start"
          href={href}
        >
          {title}
        </a>
      </div>

      <a
        className="c-contact-info__icon d-inline d-md-none display-1"
        href={href}
        aria-label={title}
      >
        {icon}
      </a>
    </div>
  );
};

const ContactBlock = ({ data }: { data: PageBlocksContact }) => {
  const { title } = data;
  const contactItems = data.contactItems || {};
  const { email, telephone, socialMedia } = contactItems || {};
  const { instagram, facebook, tiktok } = socialMedia || {};

  return (
    <Section id="contact">
      <Container>
        <div className="d-md-flex justify-content-center">
          <div className="card p-3 px-4 pt-md-2 border-0 bg-primary ">
            <div className="card-body text-center">
              <h2
                data-tina-field={tinaField(data, "title")}
                className="card-title d-none d-md-block"
              >
                {title}
              </h2>
              <div className="card-text mt-md-3">
                <div className="d-flex justify-content-evenly align-items-center flex-md-column">
                  {email && (
                    <ContactInfo
                      tinaField={tinaField(contactItems, "email")}
                      icon={<BiEnvelope />}
                      href={`mailto:${email}`}
                      title={email}
                    />
                  )}

                  {socialMedia && (
                    <>
                      {instagram && (
                        <ContactInfo
                          tinaField={tinaField(socialMedia, "instagram")}
                          icon={<BiLogoInstagram />}
                          href={`${socialMedia?.instagram}`}
                          title={getInstagramUsername(instagram)}
                        />
                      )}
                      {facebook && (
                        <ContactInfo
                          tinaField={tinaField(socialMedia, "facebook")}
                          icon={<BiLogoFacebook />}
                          href={facebook}
                          title={getFacebookUsername(facebook)}
                        />
                      )}
                      {tiktok && (
                        <ContactInfo
                          tinaField={tinaField(socialMedia, "tiktok")}
                          icon={<BiLogoTiktok />}
                          href={tiktok}
                          title={getTiktokUsername(tiktok)}
                        />
                      )}
                    </>
                  )}

                  {telephone && (
                    <ContactInfo
                      tinaField={tinaField(contactItems, "telephone")}
                      icon={<BiPhone />}
                      href={`tel:${telephone}`}
                      title={telephone}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const contactBlockSchema: Template = {
  name: "contact",
  label: "Kontakt",
  ui: {
    previewSrc: "",
    defaultItem: {
      title: "Kontaktirajte nas",
      items: {
        email: "tine@example.com",
        telephone: "+386 40 123 456",
        socialMedia: {
          instagram: "https://www.instagram.com/zdravarutina/",
          facebook: "",
          tiktok: "",
        },
      },
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "object",
      label: "Kontakt",
      name: "contactItems",
      fields: [
        {
          type: "string",
          label: "Email",
          name: "email",
        },
        {
          type: "string",
          label: "Telefon",
          name: "telephone",
        },
        {
          type: "object",
          label: "Povezave do socialnih omrežij",
          name: "socialMedia",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "TikTok",
              name: "tiktok",
            },
            {
              type: "string",
              label: "Instagram",
              name: "instagram",
            },
          ],
        },
      ],
    },
  ],
};

export default ContactBlock;
