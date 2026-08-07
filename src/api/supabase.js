import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Función para obtener las lecturas de los sensores
export const getDatosSensor = async (limit = 20) => {
  const { data, error } = await supabase
    .from('datos_sensor')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }

  return data;
};