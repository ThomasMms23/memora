import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Memora",
  description: "Politique de confidentialité de Memora. Découvrez comment nous protégeons vos données.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <article className="prose prose-gray max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Politique de Confidentialité
            </h1>

            <div className="text-sm text-gray-500 mb-12">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Memora (&quot;nous&quot;, &quot;notre&quot; ou &quot;l&apos;application&quot;) est une extension Chrome développée par Thomas Monmousseau. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez notre extension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Collecte d&apos;Informations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Memora fonctionne selon les principes suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Données stockées localement :</strong> Toutes vos citations et données sont stockées exclusivement 
                  dans votre navigateur. Nous ne transmettons aucune donnée vers nos serveurs.
                </li>
                <li>
                  <strong>Analyse IA (Gemini) :</strong> Lorsque vous utilisez l&apos;analyse IA pour générer des tags ou résumés, 
                  vos citations sont envoyées à l&apos;API Google Gemini. Ces données sont traitées conformément à la politique de 
                  confidentialité de Google.
                </li>
                <li>
                  <strong>Aucune collecte d&apos;identifiants personnels :</strong> Nous ne collectons pas votre nom, email, 
                  adresse IP ou autres informations personnelles identifiables.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Utilisation des Services Tiers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Memora utilise les services suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Google Gemini API :</strong> Pour l&apos;analyse et l&apos;enrichissement automatique de vos citations. 
                  Les données envoyées à Gemini ne sont pas stockées par Google selon leur politique de confidentialité.
                </li>
                <li>
                  <strong>Chrome Storage :</strong> Pour stocker vos données localement dans votre navigateur.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Vos Droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vous avez le contrôle total sur vos données :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Export :</strong> Vous pouvez exporter toutes vos citations en format Markdown ou JSON à tout moment.
                </li>
                <li>
                  <strong>Suppression :</strong> Vous pouvez supprimer toutes vos données en désinstallant l&apos;extension.
                </li>
                <li>
                  <strong>Accès :</strong> Vous pouvez accéder à vos données à tout moment via l&apos;interface de l&apos;extension.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Sécurité des Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous nous engageons à protéger vos données :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Toutes vos données sont stockées localement dans votre navigateur uniquement.</li>
                <li>Aucune donnée n&apos;est envoyée vers des serveurs externes (à l&apos;exception de l&apos;API Gemini pour l&apos;analyse).</li>
                <li>Nous ne partageons aucune de vos données avec des tiers.</li>
                <li>Vos données ne quittent jamais votre appareil si vous n&apos;utilisez pas la fonctionnalité d&apos;analyse IA.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Cookies et Technologies Similaires
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Memora n&apos;utilise pas de cookies ni de technologies de suivi. Toute l&apos;information est stockée localement 
                dans votre navigateur via l&apos;API Chrome Storage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Email : contact@memora.app</li>
                <li>Site web : https://memora.app</li>
                <li>Développeur : Thomas Monmousseau</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Modifications de cette Politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications entreront en vigueur dès leur publication sur cette page. Nous vous encourageons 
                à consulter régulièrement cette page pour rester informé de nos pratiques de confidentialité.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
