const { createProvider, createFlow } = require("@bot-whatsapp/bot");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const GeminiBot = require("./Services/GeminiClass");

const createGemini = async ({ provider, database }) => {
  return new GeminiBot(database, provider);
};

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([]);
  const adapterProvider = createProvider(BaileysProvider, {
    usePairingCode: true,
    phoneNumber: "593981951354",
  });

  await createGemini({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
};

main();
