//! User model.

use super::keys::Keys;
use serde::{Serialize, Deserialize};

/// JWT claims.
#[derive(Clone, Debug, Serialize, Deserialize)]
struct Claims {
    #[serde(rename = "aud")]
    audience: String,
    #[serde(rename = "exp")]
    expire_at: usize,
    #[serde(rename = "iat")]
    issued_at: usize,
    #[serde(rename = "iss")]
    issuer: String,
    #[serde(rename = "nbf")]
    not_before: usize,
    #[serde(rename = "sub")]
    subject: String,
}

#[derive(Clone, Serialize, Deserialize)]
/// Represents receiver and sender.
pub struct User {
    /// Unique identifier in Turms format.
    pub id: String,
    /// Public name.
    pub username: String,
    /// If user is sender.
    /// JsonWebToken (JWT) plain string. 
    pub token: Option<String>,
    /// Public and private (if user is sender) keys.
    #[serde(skip_serializing, skip_deserializing)]
    pub keys: Keys,
}
