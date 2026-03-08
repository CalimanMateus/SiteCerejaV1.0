// Types
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'options' | 'order-input' | 'cpf-input';
}

export interface MenuOption {
  id: string;
  label: string;
  value: string;
}

export type ChatbotState =
  | 'welcome'
  | 'menu'
  | 'track-order-input'
  | 'product-questions'
  | 'payment-methods'
  | 'delivery-time'
  | 'talking-to-attendant'
  | 'conversation';

// Simulated database for orders
interface OrderData {
  [key: string]: {
    status: string;
    trackingCode: string;
    estimatedDelivery: string;
  };
}

const fakeOrderDatabase: OrderData = {
  '123456': {
    status: 'Em transporte',
    trackingCode: 'BR123456789',
    estimatedDelivery: '2026-03-15',
  },
  '789012': {
    status: 'Entregue',
    trackingCode: 'BR789012345',
    estimatedDelivery: '2026-03-08',
  },
  '345678': {
    status: 'Aguardando envio',
    trackingCode: 'BR345678901',
    estimatedDelivery: '2026-03-20',
  },
};

// Welcome message
export const WELCOME_MESSAGE =
  'Olá 💖 Bem-vinda à nossa loja! Como podemos ajudar?';

// Menu options
export const MENU_OPTIONS: MenuOption[] = [
  { id: '1', label: 'Rastrear pedido', value: 'track-order' },
  { id: '2', label: 'Dúvidas sobre produtos', value: 'product-questions' },
  { id: '3', label: 'Formas de pagamento', value: 'payment-methods' },
  { id: '4', label: 'Prazo de entrega', value: 'delivery-time' },
  { id: '5', label: 'Falar com atendente', value: 'attendant' },
];

// Product information
export const PRODUCT_INFORMATION = {
  sizes: `📏 **Tabela de Tamanhos:**
  - P: 34-36
  - M: 38-40
  - G: 42-44
  - GG: 46-48`,
  
  exchange: `🔄 **Política de Troca:**
  Aceitamos trocas em até 30 dias após o recebimento do produto em perfeitas condições.`,
  
  products: `👗 **Produtos Femininos:**
  - Camisetas e Tops
  - Calças e Shorts
  - Vestidos
  - Conjuntos
  - Acessórios
  - Moda Sustentável`,
};

// Payment methods
export const PAYMENT_METHODS = `💳 **Formas de Pagamento:**
  - Pix (transferência imediata)
  - Cartão de Crédito (até 12x sem juros)
  - Boleto (com desconto de 5%)`;

// Delivery time
export const DELIVERY_TIME =
  '🚚 **Prazo de Entrega:**\nPrazo médio de entrega entre 5 e 12 dias úteis dependendo da região.';

// WhatsApp attendant link
export const WHATSAPP_LINK = 'https://wa.me/5599999999999';

// Function to validate CPF (basic validation)
export const validateCPF = (cpf: string): boolean => {
  const cleanCPF = cpf.replace(/\D/g, '');
  return cleanCPF.length === 11;
};

// Function to simulate order lookup
export const lookupOrder = (cpfOrCode: string): string => {
  const searchKey = cpfOrCode.replace(/\D/g, '');
  
  // Check if it's an order code
  if (fakeOrderDatabase[searchKey]) {
    const order = fakeOrderDatabase[searchKey];
    return `✅ **Pedido encontrado** 🚚\n\n**Status:** ${order.status}\n**Código de rastreio:** ${order.trackingCode}\n**Entrega estimada:** ${order.estimatedDelivery}`;
  }
  
  // Simulate CPF lookup
  if (validateCPF(searchKey)) {
    return `⚠️ Nenhum pedido encontrado para este CPF.\nVerifique o número digitado ou entre em contato com nosso atendente para mais informações.`;
  }
  
  return `❌ Código inválido. Por favor, digite um código de pedido válido ou um CPF com 11 dígitos.`;
};

// Function to get product answer
export const getProductAnswer = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (
    lowerQuery.includes('tamanho') ||
    lowerQuery.includes('size') ||
    lowerQuery.includes('p') ||
    lowerQuery.includes('m') ||
    lowerQuery.includes('g')
  ) {
    return PRODUCT_INFORMATION.sizes;
  }
  
  if (
    lowerQuery.includes('troca') ||
    lowerQuery.includes('exchange') ||
    lowerQuery.includes('devolver')
  ) {
    return PRODUCT_INFORMATION.exchange;
  }
  
  if (
    lowerQuery.includes('tipo') ||
    lowerQuery.includes('qual') ||
    lowerQuery.includes('produtos')
  ) {
    return PRODUCT_INFORMATION.products;
  }
  
  return `Desculpe, não encontrei uma resposta específica. Podemos ajudar com:\n\n${PRODUCT_INFORMATION.sizes}\n\n${PRODUCT_INFORMATION.exchange}\n\n${PRODUCT_INFORMATION.products}`;
};

// Function to generate bot response
export const generateBotResponse = (
  userMessage: string,
  currentState: ChatbotState
): { response: string; newState: ChatbotState } => {
  const lowerMessage = userMessage.toLowerCase().trim();

  switch (currentState) {
    case 'welcome':
    case 'menu':
      if (lowerMessage === '1' || lowerMessage.includes('rastrear')) {
        return {
          response: '📦 Por favor, digite seu código de pedido ou CPF para rastrear:',
          newState: 'track-order-input',
        };
      }
      if (lowerMessage === '2' || lowerMessage.includes('produto')) {
        return {
          response:
            '✨ Qual é sua dúvida sobre nossos produtos?\n\n- Tabela de tamanhos\n- Política de troca\n- Tipos de produtos',
          newState: 'product-questions',
        };
      }
      if (lowerMessage === '3' || lowerMessage.includes('pagamento')) {
        return {
          response: PAYMENT_METHODS,
          newState: 'menu',
        };
      }
      if (lowerMessage === '4' || lowerMessage.includes('entrega')) {
        return {
          response: DELIVERY_TIME,
          newState: 'menu',
        };
      }
      if (lowerMessage === '5' || lowerMessage.includes('atendente')) {
        return {
          response: '👤 Redirecionando para um atendente... Aguarde! 🔄',
          newState: 'talking-to-attendant',
        };
      }
      return {
        response: '❌ Opção inválida. Por favor, selecione uma das opções acima (1-5).',
        newState: 'menu',
      };

    case 'track-order-input':
      return {
        response: lookupOrder(userMessage),
        newState: 'menu',
      };

    case 'product-questions':
      return {
        response: getProductAnswer(userMessage),
        newState: 'menu',
      };

    default:
      return {
        response: 'Como posso ajudar?',
        newState: 'menu',
      };
  }
};

// Function to format message text (basic markdown-like formatting)
export const formatMessageText = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<em>$1</em>')
    .replace(/\n/g, '<br />');
};

// Get menu message based on state
export const getMenuMessage = (): string => {
  return `Escolha uma opção:\n\n1️⃣ Rastrear pedido\n2️⃣ Dúvidas sobre produtos\n3️⃣ Formas de pagamento\n4️⃣ Prazo de entrega\n5️⃣ Falar com atendente`;
};
